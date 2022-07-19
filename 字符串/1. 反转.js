/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 $O(1)$ 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 */

 var reverseString = function(s) {
    let l = -1, r = s.length;

    // 从最左边和最右边开始，往中间，两两对调。
     while (++l < --r) {
         [s[l], s[r]] = [s[r], s[l]]
     };
    return s;
};

console.log('🚀 → res', reverseString(["h","e","l","l","o"]))