// component avatar hình tròn dùng trong chat
const Avatar = ({ avatar, alt = '...' }) => {
    return (
        <img src={avatar} alt={alt} className='img-fluid rounded-circle border' style={{ width: '40px', height: '40px' }} />
    )
}

export default Avatar;