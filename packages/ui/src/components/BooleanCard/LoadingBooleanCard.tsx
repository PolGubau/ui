import { Card } from "../Card"
import { Switch } from "../Switch"

export const LoadingBooleanCard = () => {
  return (
    <div className="opacity-60 animate-pulse">
      <Card>
        <div className="flex justify-between gap-6 w-full">
          <header className="flex flex-col gap-1 w-full">
            <h4 className="bg-secondary/40 w-fit rounded-full text-transparent">
              lorem pisum lorem
            </h4>
            <h5 className="text-sm w-fit bg-secondary/20 rounded-full text-transparent">
              lorem pisum lorem epson
            </h5>
          </header>

          <Switch disabled checked={false} onChange={() => {}} />
        </div>
      </Card>
    </div>
  )
}
