
// From the Server right after processing of Client's inputs
// Sent the Client to display assets position and score mostly
// back::pongLogic ==> front::pongClient
export interface pongMatchInfo {
  // sensitive values, should not be sent to client
  backOnlyValues: pongBackOnlyValues;

  // game colors
  gameBackgroud: number;
  gameColor: number;
  updateBall: boolean;
  updateLeftPaddle: boolean;
  updateRightPaddle: boolean;

  // timing
  startTime: number;
  timer: number;
  lastFrameCall: number;

  //  scores
  leftScore: number;
  rightScore: number;
  gameStatus: string;
  isGameOver: boolean;
  
  //  ball data
  ballX: number;
  ballY: number;
  ballSize: number;
  ballSpeed: number;
  leftBallSpeed: number;
  rightBallSpeed: number;
  ballAngle: number;
  lastHit: string;
  
  //  paddles data
  leftPaddleHeight: number;
  rightPaddleHeight: number;
  leftPaddleSpeed : number; //paddles's movement speed up and down
  rightPaddleSpeed : number; //paddles's movement speed up and down
  leftPaddleLength: number;
  rightPaddleLength: number;
  paddleWidth: number;
  paddleDistanceFromEdge: number;
  paddleRoundness: number;

  //  bonus data
  bonusX: number;
  bonusY: number;
  bonusTimer: number;
}

// Only used by the server and never sent to client
export interface pongBackOnlyValues {
  rightId: string;
  leftId: string;
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
