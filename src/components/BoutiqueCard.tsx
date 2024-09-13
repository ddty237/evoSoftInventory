function BoutiqueCard({ data }) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title" key={data.id}>
            {data.nom}
          </h2>
          <p>{data.adresse}</p>
          <div className="card-actions">
            <button className="btn text-white bg-orange-500">Entrer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoutiqueCard;
