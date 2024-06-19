
export default function Button({ setLang, data, value, setAll, allValue, setItemOffset }: {
    setLang: any,
    data: string,
    value: string,
    setAll: any,
    allValue: boolean,
    setItemOffset: any,
}) {
    return (
        <button onClick={() => {
            setLang(value)
            setAll(allValue)
            setItemOffset(0)
        }} className="bg-[#2F4DE4] text-[20px] md:text-[24px] hover:bg-[#343f74] py-[5px] px-[10px] md:px-[25px] rounded-[12px] flex-wrap text-white">{data}</button>
    )
}
