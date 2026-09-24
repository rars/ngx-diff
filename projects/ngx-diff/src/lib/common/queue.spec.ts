import { Queue } from './queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('items should leave the queue in FIFO order', () => {
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);

    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should start empty and become non-empty when an item is enqueued', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.dequeue()).toBeUndefined();

    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(1);
    expect(queue.isEmpty()).toBe(true);
  });

  it('should preserve FIFO order when enqueue and dequeue operations are interleaved', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);

    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should be reusable after it has been emptied', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });

  it('should preserve object identity for queued values', () => {
    const objectQueue = new Queue<{ id: number }>();
    const first = { id: 1 };
    const second = { id: 2 };

    objectQueue.enqueue(first);
    objectQueue.enqueue(second);

    expect(objectQueue.dequeue()).toBe(first);
    expect(objectQueue.dequeue()).toBe(second);
  });
});
