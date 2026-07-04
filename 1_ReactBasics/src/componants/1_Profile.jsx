import reactlogo from '../assets/react.svg';
// 1 => benifits of components based developement
function Profile(params) {
    return (
        <div className='flex flex-col justify-center align-middle text-center w-50 border-4 p-1.5 m-1.5'>
            <h2>Gaurav Mane</h2>
            <img src={reactlogo} alt="img not found" className='w-16 self-center'/>
            <p>Hi, I am Gaurav Mane, a second year Computer Science and Engineering student at WCE.</p>
        </div>
    )
}
export default Profile