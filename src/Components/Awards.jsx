const awards = [
    {
      logo: "data:image/jpeg;base64,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", // Replace with actual logo
      title: "Special Commendation",
      subtitle: "FT/IFC Transformational Business Conference and Awards",
      description: "upGrad’s PG Program wins Special Commendation by FT/IFC Awards"
    },
    {
      logo: "data:image/png;base64,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",
      title: "EdTech of the Year",
      subtitle: "BW Top Education Award 2023",
      description: "upGrad wins BW Top Education Award 2023 as Best E-Learning Company"
    },
    {
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABBVBMVEX///8AAAC5ICKIISbx8fFubm6CgoKdnZ0SEhKwsLDl5eVNTU0eHh7Y2NhgEhW1tbVzc3NaWlrPz8/IyMi1AAB5eXk4ODjJycnc3Ny+vr7s7Oz4+Ph+AAAvLy+Xl5eFISaQkJBUVFS3FBcqKiqnp6djY2MMDAxYAAC4ICL58vOWISW2Awns3t+GGyGmICTLZ2hDQ0PqxsbeoaL46+vDamuUQkadBw7ETU/ktLWhW16DEBe+MzWscHLRfH3x1ta4g4XAk5XgqKjMp6mfICTWjI3Xuru9LzGwdXffyMnGWFmNNjpnExd2Gh/BQUJXEBRjAACtlZVxAACvVVfalZbJo6SeUVSiPD9Qz9+OAAAHU0lEQVR4nO2Z/1vaOBzHW1pAUKzQFlqqAhUURRRlO5VNN6dzOqa33e7u//9TLm2Skn5Byk0envm8Xz8RmrR5NcknXypJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwuhm+OVl2FRbK/ts/jLNzZ9nVWBjOxegg4xrvfg6XXZMF8X6kKBlCL3N5tey6LIIPm4rS6HqGGbf38PoG40fipzSOMhTXeLxe/mAsaZpuaTYZPbZm6ZpdK9T831qRXKzMd69Pnp/SuMlw3J57u/TBmF1RJVNuS1IxJznytqS2ViXJkvPkUl0uznOnz76fohxkBHrG8ZIHY5P46BuyJdVJM255XjumpMoa+aHJuTludM/8aJSZQHrqUgejJ2hLLdmpa0xwW1apYFuT09/nMPBjUUZUvDtdXk/1BR1HLgctaMt1X7CiWV7XTceh0g8EjzIxDPd2WT2VCpJRl+WCbSaYr1WyOynvsv828IsMwmAw9o6X01OZoFSQC0xwteWPQZWkS3Ip1U32L0YTP6WfJOj11P3FqiSituSSU/bmA7NNmnGrXjS3iqSXmqqZ96LpoJ7mLiE/RYkOQt6Iy2hCS69VirpOmtCpS5WaXqlYjuTUyA+95nh/pGnCL2G/pEHoC14vXGcxfNhUUgm6x8uu6f/jY8RvSpQhvBNKWZ0sp0NitZObpMtSfTsfsK36+fP0OpmZHTMr0sxrfBjVhGI0/qu0VEeTrMk1un7Um/TSzOXa55jftCiTcQ8nxUrlNZmyVfYEzRZLyq0WGfsCtPobNFElld6Ro6zW/Dzbwl80/tdZapuElQC6fGmylD3D7z7up/Tvem6SoBGOMvQBA57UaNp/9UVtlz2/zZaLjmpV5arlNafqsHdTcFS1WPB9N/w89Tx/aRZtd0lVdVluqqTRrFxgqNEbllblnZo6y28U9xt9GZ6fGQmKvdtQ2YHwPr02pU9nQiZrTiG/5s1kPmtCRSW16v3Oii8tyOiRZX1A3W1V5dAzdH/J/SzCAmbid+FdOTmOK7oPocKrzwmy7lYW8tvMKCIoVfxESRTUhWIbu7SV1BWzxi4PHPZE8UUkMfzab8T83rL5/Oqy14tGmdBUP79gYgtKkt8wzamCK1xwQ+LdNJdS8NA9GK+vj8ffPBoNT7avTCSGp91wM/ZCC9JnBXNzCHa8RCeNoLQlZpgtuP/oZm7GT+sTxn+G9w3nZ6KhcZ5a0JxDsJxesMgyyGoqQenYq/5Rf6K4dxjJ8f2HMO27lwsR9JtlO5Ug2UqwYZhO8JSOsu6I+91H/fbWn8Y3fHHqnv2KoD5F0BbKzRSkzU2fm0LwymBV7/o9de9z5PqnPU/7aTxiil2xA7+QYN1PsZ3rbEF1heWx0wgOhY3D0be975HL93tB3+37PdUQo8wvC3pnZartTfRVbjRbkNyGslu3ZgtKj2IMOYrshw6F6LP+9O2om+mdxgTXqoytuQVXs2WyWNjtNCfryRSCwVxRTtGC0mVoGjAer4U+OFT6jYY3gYwJxPBpfOC+iQmWbc3Hzs8tyFrCFNbLaQSdATdMIXgenstd4+6Wx1EnvMppeLI/LmKCQRe15hY02+2mf5NqsGtNIyis5WcLXkUXK5mey05Cv8aXqf2vLx9ktFBNUwkGc0UKwf2E4wnXeDyPHWP4fqPQLPlCUZQu6qx5BIO5YrZgOMpMFDN/zfR7sWnCj/vmXIJOesHbWB9lETW2Clc2I6uAedei+pTdhN8c1bkEpVpqwRMjWbAb9/sUKfqsYDsuaMu1REG/j67RTd8gXvFskiB7gSkED6cIZmJ+H6NFnxVkkW4g5M8GH4OmL9XYLqs5KeXsrkoJgnSPlUJQShqDHgcRvw+xks8K0j3QZEHt72v5z7AgbWwaZfghzOQkosmHZ0SwmFbwYYrhTWgQbn6Jl3xekE9W/FCosiY3nxOsiAl5i5+05YMr6ko29Ph2SsHTKX00FGVGFwklkwUtnubnCx3dUi07G8SRKYK8eVh02s1VisVSYTDprnU58qWlk07wMPF8iUQZQXD0T9K3bFqT4KkFmt4Orlv8jEj2j9ha/B66zjYEOd37qsIbrVUJ3YfD7lfXyPvs2LZwikb2FWkEyWrmjZE0V4gLmPhnl1JQe3lA6uB0+GGCvLMVZKqZQaa1YDCqYvW9nsjPCk2eQ2sF11d5h2CHkkEg9t9USkGyrP7ZjZ+EBlGmryR8/rTMHMf0HtMMkrlQLKjrWqFQ0MSP6RUBPwv7LeaxbFKqYE86Tl2zPbTQOag+xzf688doT+WDMLqA+W05OXZDPZUPwugC5jfm6rIrKlLBzegxxm/N8FToqf4g3Px72XV6YZzzB67oTfXxBdor4OqYThskyiQs0F4Fw9ue4UWZ0ftl12RxXN8ZbvIC5tVwcvbvq/YjvHY/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMIX/AAs3quL6+ZFKAAAAAElFTkSuQmCC",
      title: "Burgundy Private Hurun India 500",
      subtitle: "Hurun India",
      description: "upGrad ranks in Top Brands on the 2021 & 2022 Burgundy Private Hurun India 500"
    }
  ];
  
  export default function Awards() {
    return (
      <div className="text-center py-10 bg-white">
        <h2 className="text-3xl font-semibold text-black">
          Awards & <span className="text-red-500">Accomplishments</span>
        </h2>
        <div className="flex justify-center gap-10 mt-8 flex-wrap">
          {awards.map((award, index) => (
            <div key={index} className="max-w-xs text-center">
              <img src={award.logo} alt="Award Logo" className="mx-auto mb-4 h-12" />
              <h3 className="text-lg font-semibold">{award.title}</h3>
              <p className="text-red-500 text-sm font-medium">{award.subtitle}</p>
              <p className="text-gray-600 text-sm mt-2">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  