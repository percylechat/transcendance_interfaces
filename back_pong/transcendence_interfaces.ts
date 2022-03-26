
// From the Server right after processing of Client's inputs
// Sent the Client to display assets position and score mostly
// back::pongLogic ==> front::pongClient
export interface pongMatchInfo {
  // sensitive values, should not be sent to client
  backOnlyValues: pongBackOnlyValues;

  // game colors
  gameBackgroud: number;
  gameColor: number;

  // timing
  startTime: number;
  timer: number;
  lastFrameCall: number;

  //  scores
  leftScore: number;
  rightScore: number;
  
  //  ball position
  ballX: number;
  ballY: number;
  ballSize: number;
  leftPaddleBallSpeed: number;
  rightPaddleBallSpeed: number;
  ballAngle: number;
  
  //  paddles position
  leftPaddleHeight: number;
  rightPaddleHeight: number;
  leftPaddleSpeed : number; //paddles's movement speed up and down
  rightPaddleSpeed : number; //paddles's movement speed up and down
  leftPaddleLength: number;
  rightPaddleLength: number;
  paddleWidth: number;
  paddleDistanceFromEdge: number;
  paddleRoundness: number;
}

// Only used by the server and never sent to client
interface pongBackOnlyValues {
  matchId: string;
  rightPaddleId: string;
  leftPaddleId: string;
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
