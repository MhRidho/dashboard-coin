import { useState, useEffect } from "react";
import { getClients } from "../services/client.service";
import { getCoins } from "../services/crypto.service";
import { format } from "../utils/value-format";

const Content = () => {
  const clients = getClients();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins()
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [coins]);

  return (
    <div className="w-full pl-[33px] pt-7 pr-9 pb-[102px] bg-[#F5F6FA]">
      <h1 className="font-bold text-[28px]">Hi Radhika, welcome back !</h1>
      <section id="">
        <h4 className="mt-6 font-bold text-[20px]">Your client list</h4>
        <p className="font-normal">You currently servicing 3 clients</p>
      </section>

      <div className='mt-2 w-full flex flex-wrap gap-3'>
        {clients.map(({ id, logo, name, description }) => (
          <div className='bg-white md:mb-12 mt-6 pt-[21px] pl-[21px] pr-[27px] pb-[8px] md:w-1/4 shadow-[2px_2px_4px_0_rgba(0,0,0,0.05)] rounded-[5px] relative' key={id}>
            <a href="#" className="absolute top-1 right-[14px]">
              ...
            </a>
            <img src={logo} alt="DBS Logo" />
            <p className="font-bold text-base mt-4">{name}</p>
            <p className="font-normal text-[11px] leading-[15px] mt-[6px]">
              {description}
            </p>
          </div>
        ))}
      </div>

      <section id="recent-approvals">
        <div className="flex mt-[44px] justify-between items-center">
          <div>
            <h4 className="font-bold text-[20px]">Cryptocurrencies</h4>
            <p className="font-normal">
              The top 10 cryptocurrencies market cap
            </p>
          </div>
          <button className="h-8 text-white rounded-[53px] bg-[#1E67AF] px-[25px] pt-1.5 pb-7 align-middle">
            + Create new approval
          </button>
        </div>

        <table className="mt-6 bg-[#F5F6FA] w-full border-separate border-slate-400 border-spacing-y-[13px]">
          <thead>
            <tr className="rounded-[5px] bg-white h-[45px] shadow-[2px_2px_4px_0_rgba(0,0,0,0.05)]">
              <td className="px-4 py-[13px] font-normal text-sm">Image</td>
              <td className="px-4 py-[13px] font-normal text-sm">Name</td>
              <td className="px-4 py-[13px] font-normal text-sm text-right">
                Current price
              </td>
              <td className="px-4 py-[13px] font-normal text-sm text-right">
                Market cap
              </td>
            </tr>
          </thead>
          <tbody>
            {coins.map(({ id, image, name, current_price, market_cap }) => (
              <tr
                className="rounded-[5px] bg-white h-[70px] shadow-[2px_2px_4px_0_rgba(0,0,0,0.05)]"
                key={id}
              >
                <td className="px-4 py-[13px] font-normal text-sm">
                  <img src={image} alt={name} width={40} height={40} />
                </td>
                <td className="w-2/5 px-4 py-[13px] font-bold text-base">
                  {name}
                </td>
                <td className="px-4 py-[13px] font-normal text-sm text-right">
                  {format(current_price)}
                </td>
                <td className="px-4 py-[13px] font-normal text-sm align-middle text-right">
                  {format(market_cap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#" className="pt-[15px] font-semibold text-[#1E67AF]">
          See all approvals here
        </a>
      </section>
    </div>
  );
}

export default Content;
