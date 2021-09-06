import React from 'react'
import { useForm } from 'react-hook-form';

function AddCategory({ setMainDropDOwn, setsecondDropDown, setThirdDropDown, mainDropDOwn, secondDropDown, thirdDropDown }) {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        if (data.parentCategory === "first") {
            setMainDropDOwn([...mainDropDOwn, data.categoryName])
        } else if (data.parentCategory === "second") {
            setsecondDropDown([...secondDropDown, data.categoryName])
        } else if (data.parentCategory === "third") {
            setThirdDropDown([...thirdDropDown, data.categoryName])
        }
        reset();
    };



    return (
        <div className="card ms-auto me-auto w-25 p-5 mt-5 addCategoryWrapper">
            <h3 className="text-center">Add a new Category</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="categoryName" class="form-label">Category Name</label>
                    <input {...register("categoryName", { required: true })} type="text" class="form-control" id="categoryName" aria-describedby="emailHelp" />
                </div>

                <label for="parentCategory" class="form-label">Select your parent Category</label>
                <select  {...register("parentCategory")} id="parentCategory" class="form-select" aria-label="Default select example">
                    <option value="first">First Level</option>
                    <option value="second">second Level</option>
                    <option value="third">Third Level</option>
                </select>
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

export default AddCategory
