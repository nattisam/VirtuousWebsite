import { TeamCardProps } from "../../types/team-card";
const TeamCard = ({ imageSrc }: TeamCardProps) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 xl:w-1/4">
          <div className="mx-auto mb-10 w-full max-w-[370px]">
            <div className="relative overflow-hidden rounded-lg">
              <img src={imageSrc} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </>
    );
  };

  export default TeamCard;