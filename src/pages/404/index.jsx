import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div className='container justify-content-center'>
           <h1 className='text-center'>PÁGINA NO ENCONTRADA</h1>  
           <ReportProblemIcon className=' ps-5 ms-5 w-25 h-25'/>
           <Link to={"/"} className='btn btn-info'> Volver</Link>
        </div>
 
     
    )
  }
  
  export default PageNotFound;