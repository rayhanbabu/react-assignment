

function Footer(props) {
  if (!props.items.length)
  return (
      <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
      </p>
  );

const numItems = props.items.length;
const numPacked = props.items.filter((item) => item.packed).length;
const percentage = Math.round((numPacked / numItems) * 100);


    return (
        <div>
            <div className="container-fluid  bg-dark">
  <div className="row ">
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12  text-center  text-light">
      <h3>Conact Us</h3>
      <p>Md Rayhan Babu</p>
      <p>Phone 01750360044</p>
      <p>E-mail: rayhanbabu458@gmail.com</p>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-2 ">
               <em>
                {percentage === 100
                    ? "You got everything! Ready to go ✈️"
                    : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
              </em>
      <img
        src="https://placehold.co/200"
        className="rounded mx-auto d-block"
        alt="..."
      />
    </div>
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 p-2 text-light ">
      <h3>Useful Link </h3>
      <a
        className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        href="#"
      >
        Service
      </a>{" "}
      <br />
      <a
        className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        href="#"
      >
        Login
      </a>{" "}
      <br />
      <a
        className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        href="#"
      >
        Registration
      </a>
    </div>
  </div>
</div>



        </div>
    )
}

export default Footer
