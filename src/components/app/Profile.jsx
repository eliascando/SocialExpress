import '../../css/Profile.css'

export const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile-info'>
          <div className='profile-info-content'>
            <div className='avatar'>
              <img src='https://picsum.photos/200' alt='avatar'></img>
            </div>
            <div className='info-content-data'>
              <div className='data'>
                <div className='user-name'>
                  <h2>Pepe Perez Vidal</h2>
                  <h3>@pepeperez</h3>
                </div>
                <div className='user-bio'>
                  <p>Bio Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className='follows-followers-posts'>
                  <table className='table-info'>
                    <thead>
                      <tr>
                        <th id='seguidos'>Seguidos</th>
                        <th id='seguidores'>Seguidores</th>
                        <th id='posts'>Posts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12</td>
                        <td>5</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
        <div className='profile-posts'>
           <div className='post-card'>
                <div className='post-header'>
                    <div className='user-avatar'>
                        <img src='https://picsum.photos/200' alt='avatar' />
                    </div>
                    <div className='user-name'>
                        <h3>Nombre de usuario</h3>
                    </div>
                </div>
                <div className='post-content'>
                    <div className='post-content-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}