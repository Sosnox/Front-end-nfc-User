import { MdAccessTime } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { PiApplePodcastsLogoBold } from "react-icons/pi";


interface Data {
    id_boardgame: number,
    title_game: string,
    detail_game: string,
    path_image_boardgame: string,
    player_recommend_start: number,
    player_recommend_end: number,
    recommend: boolean
    age_recommend: number,
    time_playing: number,
    count_scan_boardgame: number
}

function BoxDetail({ title_game,
                     player_recommend_start,
                     player_recommend_end,
                     age_recommend,
                     time_playing,
                    }: Data) {

    return (
        <div className="flex flex-col pt-1 absolute left-[120px]">
            <label className="text-[20px] font-bold">{title_game}</label>
            <div className="flex flex-col text-[15px] ">
                <label className="flex">
                    <MdAccessTime size={23} />
                    <span className="ml-2">{time_playing} นาที</span>
                </label>

                <label className="flex">
                    <MdGroup size={23} />
                    <span className="ml-2">{player_recommend_start} - {player_recommend_end} คน</span>
                </label>

                <label className="flex">
                    <PiApplePodcastsLogoBold size={23} />
                    <span className="ml-2">{age_recommend} ปี</span>
                </label>
            </div>

        </div>
    );
}


export default BoxDetail