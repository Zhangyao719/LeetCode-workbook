// 获取链表长度
var getListLen = function (head) {
    let len = 0, cur = head;
    while(cur) {
       len++;
       cur = cur.next;
    }
    return len;
}

var getIntersectionNode = function(headA, headB) {
    let curA = headA,curB = headB,
        lenA = getListLen(headA),
        lenB = getListLen(headB);
    if (lenA < lenB) {
        // 统一下大小，设置成 A > B
        // 下面交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
        // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }

    // A指针一直移动到和B一致的位置
    let i = lenA - lenB;
    while(i-- > 0) {
        curA = curA.next;
    }

    // 如果 A 和 B 不一致，继续比较下一个节点
    while(curA && curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};