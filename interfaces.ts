
// visual config
interface pongConfig {
  readonly gameBackgroud: number;
  readonly gameColor: number;
  readonly ballSize: number;
  readonly paddleLength: number;
  readonly paddleWidth: number;
  readonly paddleDistanceFromEdge: number;
  readonly paddleRoundness: number;
}

// sent to the front
interface pongGameStatus {
  readonly scoreLeft: number;
  readonly scoreRight: number;
  readonly ballX: number;
  readonly ballY: number;
  readonly paddleLeftHeight: number;
  readonly paddleRightHeight: number;
  // readonly time: Date; //todo add
}
