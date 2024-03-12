import Contact from './Contact.js'
const mca = require('./mca.json')

function App(props) {
  console.log(mca)
  return (
    <>
    {/* <Codepan title="create laravel project" content="composer create-project laravel/laravel projectname" />
    <Codepan titleBackColor="green" title="" content="" />
    <Codepan titleBackColor="yellow" title="" content="" />
    <Codepan titleBackColor="red" title="node module install" content="npm install -f" /> */}
    {
      mca.map(function(student){
        return <Contact image={`https://cms.atmiya.edu.in/images/Stud_Photo/${student.AdmissionNo}.JPG`} name={student.StudentName} description={`${student.Division} - ${student.RollNo}`} />
      })
    }
    
    </>
  );
}

export default App;
