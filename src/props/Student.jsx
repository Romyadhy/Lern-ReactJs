import PropTypes from 'prop-types'



function Judul() {
    return (
        <h3 className="font-bold text-5xl m-4 p-2">Hello Props</h3>
    );
}
export default function Student(props) {
    return (
        <>
        <div className=" text-center border-2 m-4 p-2">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
        </>
    );
}

Student.propTypes = {
     name: PropTypes.string,
     age: PropTypes.number,
     isStudent: PropTypes.bool,
}

Student.deflStudent = {
    name: "Guest",
    age: 0,
    isStudent: false
}