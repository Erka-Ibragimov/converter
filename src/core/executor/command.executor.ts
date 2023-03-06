import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "../handlers/stream-logger.interface";
import { ICommandExec } from "./command.types";

export abstract class CommandExecutor<T> {
  constructor(private logger: IStreamLogger) {}

  public async execute() {
    const input = await this.prompt();
    const command = this.build(input);
    const stream = this.spawn(command);
    this.proccessStream(stream, this.logger);
  }

  protected abstract prompt(): Promise<T>;
  protected abstract build(input: T): ICommandExec;
  protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams;
  protected abstract proccessStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}
