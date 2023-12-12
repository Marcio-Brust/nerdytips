import { TableGames } from "./TableGames"


export const Accordion = () => {
  return (
    <div>
         <div className="flex flex-col gap-2">
          <div className="collapse collapse-arrow rounded-md">
            <input type="radio" name="my-accordion-2" className="h-[40px]" />
            <div className="collapse-title text-sm  font-normal bg-base-200 rounded-md">
              🌏 World - Euro Championship - Qualification
            </div>
            <div className="collapse-content p-0 mt-5">
              <TableGames />
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm  font-normal bg-base-200 rounded-md">
              🌏 World - Euro Championship - Qualification
            </div>
            <div className="collapse-content p-0 mt-5">
              <TableGames />
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm  font-normal bg-base-200 rounded-md">
              🌏 World - Euro Championship - Qualification
            </div>
            <div className="collapse-content p-0 mt-5">
              <TableGames />
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm  font-normal bg-base-200 rounded-md">
              🌏 World - Euro Championship - Qualification
            </div>
            <div className="collapse-content p-0 mt-5">
              <TableGames />
            </div>
          </div>
          <div className="collapse collapse-arrow rounded-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm  font-normal bg-base-200 rounded-md">
              🌏 World - Euro Championship - Qualification
            </div>
            <div className="collapse-content p-0 mt-5">
              <TableGames />
            </div>
          </div>
        </div>
    </div>
  )
}
