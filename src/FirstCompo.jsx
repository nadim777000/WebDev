function FirstCompo({data})
{
return(
    <div>
        <h2>Name:{data.strCategory}</h2>
        <img src={data.strCategoryThumb} alt="" />
        <p>Description:{data.strCategoryDescription}</p>
    </div>
)
}
export default FirstCompo;