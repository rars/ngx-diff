// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export class Queue<T extends {}> {
  private readonly pushToStack: T[] = [];
  private readonly popFromStack: T[] = [];

  public enqueue(item: T): void {
    this.pushToStack.push(item);
  }

  public dequeue(): T | undefined {
    if (this.popFromStack.length == 0) {
      while (this.pushToStack.length > 0) {
        const top = this.pushToStack.pop();
        if (top !== undefined) {
          this.popFromStack.push(top);
        }
      }
    }

    return this.popFromStack.pop();
  }

  public isEmpty(): boolean {
    return this.pushToStack.length === 0 && this.popFromStack.length === 0;
  }
}
