import { useState } from "react";
import ErrorModal from "../UI/Modal/ErrorModal";
import Button from "../UI/Button/Button";
import styles from "../NewUser/FormNewUser.module.css";


const FormNewUser = (props) =>{

    const [enteredUser, setEnteredUser] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const userNameHandle = (event) =>{
        if(event.target.value.trim().length > 0) {
            setEnteredUser(event.target.value);
        }
    }

    const userAgeHandle = (event) =>{
        if(event.target.value.trim().length > 0) {
            setEnteredAge(event.target.value);
        }
    }


    const formSubmitHandler = (event) => {
        event.preventDefault();

        const userDataEntered= {
            userName: enteredUser,
            age: +enteredAge,
            id: Math.random().toString()
        }

        if((enteredUser.trim().length === 0) || (enteredAge.trim().length  === 0)) {
            setError({
                title: 'Invalid Inputs',
                message: 'Please enter a valid Name and Age (non-empty values)'
            });
            return;
        }

        if(+enteredAge < 0) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        //calling the prop addUser created in parent App.js which hold the function addUserHandler
        props.addUser(userDataEntered);

        setEnteredUser('');
        setEnteredAge('');
    }

    // close the modal by clicking on the button or on the backdrop
    const closeModalHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal titleModal={error.title} messageModal={error.message} onCancel={closeModalHandler}></ErrorModal>}
        
            <form onSubmit={formSubmitHandler}>
            <div className={styles["form-control"]}>
                <div>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" value={enteredUser} onChange={userNameHandle}/>
                </div>
                <div>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" value={enteredAge} onChange={userAgeHandle}/>
                </div>
            </div>
        
            <Button type="submit">Add User</Button>
            </form>
        </div>
      );
}

export default FormNewUser;