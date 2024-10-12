import PropTypes from 'prop-types'

export default function LoginTes(props) {

    // variable
    const success = <h2 className="bg-green-500 text-3xl font-bold text-white p-4 rounded-md text-center">Welcome {props.userName}</h2>
    const failed = <h2 className="bg-red-500 text-3xl font-bold text-white p-4 rounded-md text-center">Please Loggin first</h2>

    return (props.isLogin ? success : failed );
}

LoginTes.prototype = {
    isLogin: PropTypes.bool,
    userName: PropTypes.string,
}

LoginTes.defaultProps = {
    isLogin: false,
    userName: "Guest",
}