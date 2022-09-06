import './Home.css'

const Home =()=>{
    return<div className='fondo'>
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2F3.jpg?alt=media&token=708af0ca-7fac-42f4-a187-5af9d8d6f0da" className="d-block carru w-100 .img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nueva pagina</h5>
                            <p>Todas las herramientas online.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2F4.jpg?alt=media&token=456829fb-a617-4625-96e0-6fcaf830988b" className="d-block w-100 carru .img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='hache-cinco'>Herramientas Electricas</h5>
                            <p className='pe'>Herramientas para la construccion y uso en profesional.</p>
                        </div>
                </div>
                <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2Fbg1.jpg?alt=media&token=67f41293-055a-46b8-963f-73710658c06a" className="d-block carru w-100 .img-fluid" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='hache-cinco'>Gran Variedad</h5>
                        <p className='pe'>Herramientas Profesionales en tu Casa.</p>
                    </div>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguente</span>
                </button>
            </div>
        <div className='container'>
            <h2 className='htitle'>ACO Herramientas</h2>
            <div className="row row-cols-2">
                <div className="col"><br/>
                </div>
                <div></div>
                <div className="col"><h4 className='peAbout'> Más que una empresa somos un mundo en soluciones para quienes buscan respaldo garantía calidad al momento de adquirir un producto y levantar un proyecto de calidad y que perdure en el tiempo. Ofrecemos soluciones integrales dentro del rubro maquinaria y ferretería especialista. Soluciones que puedes ver a continuación.</h4>
                </div>
                <div className="col"><img className='about' src='https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2Faasd.jpg?alt=media&token=a4c5d7be-0e46-46f1-a83f-bb88843a3f6b' alt=''/></div>
                <div className="col">
                    <div className="row row-cols-2">
                        <div className="col"><img className='about tnail' src='https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2FACO-Logo.svg.png?alt=media&token=bfb59b83-dce7-43cd-8fc2-b4ba19488d24' alt=''/></div>
                        <div className="col"><img className='about tnail' src='https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2Fenergy.jpg?alt=media&token=2ca05e7b-661f-4a14-ada8-0ea6b80d416b' alt=''/></div>
                        <div className="col"><img className='about tnail' src='https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2Fgladiatorpro.jpg?alt=media&token=49c80268-23d8-4c78-bdd4-9ee7b296d994' alt=''/></div>
                        <div className="col"><img className='about tnail' src='https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2Fneoh.jpg?alt=media&token=7e29753c-96f8-4a31-9788-ce7b527b6ce2' alt=''/></div>
                        </div>
                    </div>
                 
                <div className="col"><h4 className='peAbout'> Trabajamos con marcas como : 
                <ul>
                    <li>NEO</li>
                    <li>Gladiator PRO</li>
                    <li>Energy Tools</li>
                </ul>
                </h4></div>
  </div>
        </div>
    </div>
}
export default Home