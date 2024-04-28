const Notification = ({notificationData}) => {
    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: notificationData.type === 'success' ? 'green' : 'red',
        color: 'black',
        padding: 20,
        borderRadius: 10
    }

    return (
        <article style={notificationStyle}>
            <h3>Agregado al Carrito</h3>
            {notificationData.text}
        </article>
    )
}

export default Notification