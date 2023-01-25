const markAsRead = () => {

    const notificationsNUmber = document.querySelector('#notifications-number')
    const btn = document.querySelector('.read-all')
    const notifications = document.querySelectorAll('.notification')
    const redDots = document.querySelectorAll('.red-dot')

    const handleClick = () => {
        btn.addEventListener('click', () => {
            setNotificationsNumber()
            changeBg()
            removeRedDots()
        })
    }
    handleClick()

    const setNotificationsNumber = () => {
        notificationsNUmber.textContent = '0'
    }

    const changeBg = () => {
        notifications.forEach(notification => {
            if (notification.classList.contains('unread-bg')) {
                notification.classList.remove('unread-bg')
            }
        })
    }

    const removeRedDots = () => {
        redDots.forEach(dot => {
            console.log(dot.style.color)
            if (dot) {
                dot.remove()
            }
        })
    }
}
markAsRead()
