const markAll = document.getElementById('mark_all')
const unreadMessages = document.querySelectorAll(".unread")
const unread = document.querySelector("#notifes")
unread.innerText = unreadMessages.length



unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.toggle("unread");/*这一步去掉背景装饰和红点*/
        const newUnreadMessages = document.querySelectorAll(".unread");/*这一步重新选择新的消息栏*/
        unread.innerText = newUnreadMessages.length;/*这一步设置，未读信息的条数为上一步的长度*/
    })
})
markAll.addEventListener("click", () => {
    unreadMessages.forEach(message => message.classList.remove("unread"))
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
})

