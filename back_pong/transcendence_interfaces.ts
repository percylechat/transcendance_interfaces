// main interface
export interface pongMatchInfo {
  config: pongConfig;
  gameStatus: pongGameStatus;
}

// global config for the match init
export interface pongConfig {
  //  visuals
  gameBackgroud: number;
  gameColor: number;
  ballSize: number;
  paddleLength: number;
  paddleWidth: number;
  paddleDistanceFromEdge: number;
  paddleRoundness: number;

  //  physics
  ballSpeed: number;
  ballAngle: number;
  // startTime: Date;

  //  controls
  paddleSpeed : number; //paddles's movement speed up and down
  inputType: number; //1: keyboard, 2: mouse //maybe rm
}

// From the Server right after processing of Client's inputs
// Sent the Client to display assets position and score mostly
// back::pongLogic ==> front::pongClient
export interface pongGameStatus {
  scoreLeft: number;
  scoreRight: number;
  ballX: number;
  ballY: number;
  paddleLeftHeight: number;
  paddleRightHeight: number;
  // time: Date; //todo add
}

// From the Client keyboard event listenner
// Sent to the Server to process Client's inputs
// front::pongClient ==> back::pongLogic
export interface pongClientInput {
  // 1: down, 0: no movement , -1: down
  paddleDir: number;
  userId: string;
  matchId: string;
}
