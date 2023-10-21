type selectProps = {
    options: any[]
  }
export default function SelectComp(props: selectProps) {
    return(
        <>
         <div>
      <select className="p-2">
        {props.options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>   
        </>
    )
}