const InputComp = function(props) {

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return(
        <input type="text" onChange={handleChange}/>
    )

}

export default InputComp