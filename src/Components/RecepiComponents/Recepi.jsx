
import { useNavigate, Link } from 'react-router-dom';

function ShowRecepy({ recipes }){
    const navigate = useNavigate();


   return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      maxWidth:'1000px',
      margin: '0 auto',
    }}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{
        
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          width:'300px',
          
       
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
       
   
        }}>
          <div style={{
          
          height:'300px',
       
          }}>
            <Link to={`/index/${recipe.id}`}>
            <img 
              src={recipe.imgUrl} 
              alt={recipe.name} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
            </Link>
          </div>
          <Link to={`/index/${recipe.id}`} style={{ color: 'black' }}>
            <p style={{ margin: '10px', fontWeight: 'bold' }}>{recipe.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ShowRecepy;