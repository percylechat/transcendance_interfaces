
// From the Server right after processing of Client's inputs
// Sent the Client to display assets position and score mostly
// back::pongLogic ==> front::pongClient
export interface pongMatchInfo {
  // game colors
  gameBackgroud: number;
  gameColor: number;
  
  // timing
  startTime: number;
  timer: number;
  lastFrameCall: number;
  
  // controls
  inputType: number; //1: keyboard, 2: mouse //maybe rm
  
  //  scores
  scoreLeft: number;
  scoreRight: number;
  
  //  ball position
  ballX: number;
  ballY: number;
  ballSize: number;
  ballSpeed: number;
  ballAngle: number;
  
  //  paddles position
  paddleLeftHeight: number;
  paddleRightHeight: number;
  paddleSpeed : number; //paddles's movement speed up and down
  paddleLength: number;
  paddleWidth: number;
  paddleDistanceFromEdge: number;
  paddleRoundness: number;
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
