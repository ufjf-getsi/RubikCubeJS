import React, { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { doMove } from "./rubik.mjs";
import OpenedCube from "./components/OpenedCube/OpenedCube";
import LargeCube from "./components/LargeCube/LargeCube.js";
import { io } from 'socket.io-client'
import "./App.css";

const socket = io('http://localhost:3001');

export default function App() {
  // Cube States
  const [cube, setCube] = useState(setCubeInitialValues());
  const [moveHistory, setMoveHistory] = useState([]);
  const [moveHistoryIndex, setMoveHistoryIndex] = useState(-1);

  // Chat States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");
  const [visible, setVisible] = useState(false);

  // let roomNumber = 0;

  // -------- Comunicações com o servidor --------
  const clearInput = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      clearInput();
      // socket.emit("send_cube", {cube, room})
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
    clearInput();
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });

    socket.on("move_cube", (data) => {
      setCube([...data.cube]);
    });

    socket.on("set_cube", () => {
      setCube([...setCubeInitialValues()]);
    });
  }, [socket]);

  useEffect(() => {
    setVisible(true);
    const id = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(id);
  }, [messageReceived]);
  // ---------------------------------------------

  // ------------------ Botões -------------------
  const reset = (
    <button
      className="reset-button"
      key={"reset"}
      onClick={function click() {
        setCube([...setCubeInitialValues()]);
        socket.emit("initial_cube", { cube, room })
      }}
    >
      {"Reset"}
    </button>
  );

  const undo = (
    <button
      className="undo-button"
      key={"undo"}
      onClick={function click() {
        undoMove();
      }}
    >
      {"Undo"}
    </button>
  );

  const redo = (
    <button
      className="redo-button"
      key={"redo"}
      onClick={function click() {
        redoMove();
      }}
    >
      {"Redo"}
    </button>
  );

  const commands = ["L", "R", "U", "D", "F", "B", "l", "r", "u", "d", "f", "b"];

  const elementButtons = [];

  for (let b = 0; b < commands.length; b++) {
    let character = commands[b];
    if (character === character.toLowerCase()) {
      character = character.toUpperCase();
      character += "'";
    }
    elementButtons.push(
      <button
        className="move-button"
        key={b}
        onClick={function click() {
          doCubeMove(commands[b]);
        }}
      >
        {character}
      </button>
    );
  }

  const inputRoom = (
    <input
      class="input-room"
      type="number"
      placeholder="Sala nº..."
      onChange={(event) => { setRoom(event.target.value); }}
    />
  );

  const buttonRoom = (
    <button
      class="button-room"
      onClick={joinRoom}>
      Entrar na sala
    </button>
  );

  const inputMessage = (
    <input
      class="input-message"
      type="text"
      placeholder="Escreva sua Mensagem..."
      onChange={(event) => { setMessage(event.target.value); }}
    />
  );

  const buttonMessage = (
    <button
      class="button-message"
      onClick={sendMessage}>
      Enviar
    </button>
  );

  // ---------------------------------------------

  // ----- Funções para movimentação do cubo -----
  function doCubeMove(move) {
    doMove(move, cube);
    socket.emit("send_cube", { cube, room })
    if (moveHistory.length === moveHistoryIndex + 1) moveHistory.push(move);
    else moveHistory[moveHistoryIndex + 1] = move;
    setMoveHistory([...moveHistory]);
    setMoveHistoryIndex(moveHistoryIndex + 1);
  }

  function redoMove() {
    if (moveHistoryIndex > moveHistory.length - 2) return;
    const nextMove = moveHistory[moveHistoryIndex + 1];
    doMove(nextMove, cube);
    socket.emit("send_cube", { cube, room })
    setMoveHistoryIndex(moveHistoryIndex + 1);
  }

  function undoMove() {
    if (moveHistoryIndex < 0) return;
    else if (moveHistoryIndex === 0) {
      setCube([...setCubeInitialValues()]);
    } else {
      const lastMove = moveHistory[moveHistoryIndex];
      if (lastMove === lastMove.toLowerCase()) {
        doMove(lastMove.toUpperCase(), cube);
        socket.emit("send_cube", { cube, room })
      } else {
        doMove(lastMove.toLowerCase(), cube);
        socket.emit("send_cube", { cube, room })
      }
    }
    setMoveHistoryIndex(moveHistoryIndex - 1);
  }
  // ---------------------------------------------

  // const onClickRoom = () => {
  //   if (roomNumber > 0){
  //     setRoom(roomNumber); 
  //     joinRoom()
  //   }
  // }

  return (
    <div className="App">
      <h2 className="title">Rubik's Cube {!room ? "" : "- Sala " + room}</h2>
      <div className="cube3d">
        <Canvas colormanagement>
          <OrbitControls />
          <Stars fade depth={1.2} />
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <LargeCube cube={cube} />
          </Suspense>
        </Canvas>
      </div>
      <OpenedCube cube={cube} />

      <div className="controls">
        {reset}
        <div className="move-buttons">{elementButtons}</div>
        {undo}
        {redo}
      </div>

      <div className="chat">
        <div className="message">{visible ? messageReceived : null}</div>
        
        {inputRoom}
        {buttonRoom}
        {inputMessage}
        {buttonMessage}
      </div>
    </div>
  );
}

function setCubeInitialValues() {
  let cube = [];
  for (let i = 0; i < 6; i++) {
    cube.push([
      [i, i, i],
      [i, i, i],
      [i, i, i],
    ]);
  }
  return cube;
}
