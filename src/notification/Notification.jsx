const Notification = ({notificationData}) => {
    const notificationStyle = {
        position: 'absolute',
        top: 150,
        right: 47,
        backgroundColor: notificationData.type === 'success' ? '#008000e0' : 'red',
        color: 'black',
        padding: 20,
        borderRadius: 10,
        fontSize:20,
    }

    return (
        <article style={notificationStyle}>
            <h3>Agregado al Carrito</h3>
            {notificationData.text}
        </article>
    )
}

export default Notification