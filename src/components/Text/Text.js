function Text(props){
    return(
        <div className="w-full h-auto  mb-5
        sm:w-3/5 sm:m-auto
        md:w-3/5 md:m-auto
        ">
            <div className="m-5">
                <h1 className="font-bold mb-7 mt-7" style={{fontFamily:'vazir',fontSize:'25px'}}>{props.title}</h1>
                    <p style={{
                        fontFamily:'vazir',
                        fontSize:'15px',
                        padding:'5px',
                        textAlign:'justify',
                        lineHeight:'40px'
                }}>{props.description}</p>
                </div>
        </div>
    )
}

export default Text