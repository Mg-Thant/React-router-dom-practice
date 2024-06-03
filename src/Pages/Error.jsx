import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    let title = "Unknown error occured";

    if (error.status === 500) {
        title = error.data.message;
    }

  return (
    <div className='error'>
      <h1>{title}</h1>
      <Link to={"/"} ><button className='button'>Go back Home</button></Link>
    </div>
  )
}

export default Error
