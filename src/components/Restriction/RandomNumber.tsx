type RandomNumberType={
    value:number,
}
type PositiveNumber=RandomNumberType &{
    isPositive:boolean
    isNegative?:never
    isZero?:never
}
type NegativeNumber=RandomNumberType &{
    isNegative:boolean
    isPositive?:boolean
    isZero?:never
}
type ZeroNumber=RandomNumberType &{
    isZero:boolean
    isPositive?:boolean
    isNegative?:never
}
type RandomNumberProps= PositiveNumber|NegativeNumber|ZeroNumber
export const RandomNumber=({
    value,
    isPositive,
    isNegative,
    isZero,
}:RandomNumberProps)=>{
    return(
        <div>
            {value}{isPositive && "positive"} {isNegative && "negative"}{" "}{isZero && "zero"}
        </div>
    )
}
