/**
 * 链表是一种通过指针串联在一起的线性结构;
 * 每一个节点由两部分组成，一个是数据域一个是指针域（存放指向下一个节点的指针）;
 * 最后一个节点的指针域指向null（空指针的意思）。
 * 
 * 单链表中的指针域只能指向节点的下一个节点。
 * 双链表：每一个节点有两个指针域，一个指向下一个节点，一个指向上一个节点。
 */

class ListNode1 {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode ) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next
  }
}
