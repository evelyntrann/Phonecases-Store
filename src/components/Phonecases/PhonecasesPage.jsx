import PhonecasesCard from "./PhonecasesCard";
import "./phonecases.css";
const PhonecasesPage = (props) => {
    const {allPhonecases} = props;
    return ( 
        <>
        <section className="phonecases-container">
            {allPhonecases.map((phonecase) => {
                return(
                    <>
                    <div key={phonecase.id}>
                        <PhonecasesCard 
                        id={phonecase.id} 
                        name={phonecase.name} 
                        category={phonecase.category} 
                        description={phonecase.description} 
                        price={phonecase.price} 
                        imageUrl={phonecase.imageUrl}/>
                        </div>
                    </>
                )
            })}
        </section>
        </>
     );
}
 
export default PhonecasesPage;