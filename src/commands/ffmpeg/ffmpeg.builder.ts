export class BulderFFMPEG {
  private input: string;
  private output: string;
  private options: Map<string, string> = new Map();

  constructor() {
    this.options.set("-c:v", "libx264");
  }
}
