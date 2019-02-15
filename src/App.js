import React, { Component } from "react";
import "./App.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  state = {
    activeTab: "1",
    activeTab2: "1",
    activeTab3: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  toggle2 = tab2 => {
    if (this.state.activeTab2 !== tab2) {
      this.setState({
        activeTab2: tab2
      });
    }
  };

  toggle3 = tab3 => {
    if (this.state.activeTab3 !== tab3) {
      this.setState({
        activeTab3: tab3
      });
    }
  };

  render() {
    const maria = "María Estefanía";
    const mariaPhoto =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtApCClx89_SFSL_cenQ6LVgW86bwLCALhRDxGBxtAAR81eBO";
    const jose = "Jose Hernandéz";
    const josePhoto =
      "data:image/jpeg;base64,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";
    const omar = "Omar Zagal";
    const omarPhoto =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWFRUXGBgVFRUXGBcVFRcXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHiUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADsQAAEDAgQDBgQEBQMFAAAAAAEAAhEDBAUSITFBUWEGEyJxgbGRocHwMkLR4QcUUnLxFSNiJDNDstL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAJREAAgICAgEFAQEBAQAAAAAAAAECEQMhEjFBBBMiUWEyofAU/9oADAMBAAIRAxEAPwD7I/krWsyhD1awaQTsrK1cEacUiaGZGlq6UWSqKBAXtWoNj8Oa5PRzB5n4qDgFzn8lTXZpqsOSaQ6RGpWHBQp1hmjihKZ1IR1rbjdRjPktBqg6mre6CqBVjai3Q4pUwO2QqUwFFr4ClVUCNEJPfxAevfKuadEC1+sK8VUceS+wMjVKr7wKVd2hWVxjHBTdla4T5/ZSXynSGSNA5xOgVT6E6rC3mM1Nw987gBxaD9fms7c43Vgkl51jWs7SeI4aclT/AM99nUfYXiG7oGkZJ818stMYfpNWq0Hmc48vFP2E0s8Zr0nB7C2pPAkg/CY+CV4Hd2FH1LuxAAQhtZKz2HduKZ0rU3UzziW/qtLY31Oq3NTdmHMJJQl5OstoWoaESGBUGuvadfVMqoJZVtpEFB1MPDdQj++Uar5Qko0crFT7gt0RVtiMxqhbqzLjoqadmRwSqf0M0maIVwhq+pSd9SoETbXJjVU58heNBTaUIqi9BU7qUQx3JFP6OZbcNkIBr9wi8/NLa5Id5pZ92CJIUui5XNK9Q4oYJuGE77Kiq/K1FVzGiDFUE67deKo9Imgf+ZJgnZW0KnMqVxQDholV3Xy6LHzcXspSobuuBopVDKTWLiSSfRMsxUZy5uzqojVttdEbbsIEFDtqgbomncCIEKeCDjkphbTVnsaq4OQocSVa4rY20rQiaJVaioqVlNrJQl44hBzlVsVsvo0uK9rmELh1fTXghsfxEUqbnzB2b5naAuUlWuwLYj7W43BNJrnAAeLLxPKVgLrGQwQwQTu6BJ9eSniV+Dm8RJGu+/3qs/VfUcTy6mT6LdiSiqHaoNN0XAODo11O4nqNx7K+7pFwkGRHrHRJXEt4ZfLb1CJsrsgwN/6Tx/tVGzkrPWv7s7mOKbWly0jX5fXkg7ivI4tPEGY9ihBnBkCT0Bg/EIWGh3cGI8ZDerQ4H1mE07PY5UouilBa7g4nK7o2Njp5JNhxLogO13YY0O/hJOnNSuXtpw8AaSAdjyc10b777+yKaemdJfR9UwTGmXLZaC1w3afdp4gTumVJmvmvkuCY0adenV8gRtofD7L7NSaHAOGxAI8ipZMdPQqlohkVrGqeRQUeO6GTJhgUxTEIbvFex2ieKSAzx1AFRFk3krGvUm1U9RBbFt3aRsqbWrvPAwmtVwISx1CZjipS09DLZYa0kgawo1m7KpstMcPdV3VwdFwyQYwCF6lgrlcu5Bpjx75clmJsjbdGUnGdl7fMGVTyO3QsV9gNjfeGCNV7XpNdBIXrarAJlSo0iRISyg+gdELS31JRzKcBC2zoUbq8jRdUVERspr1CTAUqVEqFnUEklFMrAlZE35OvQbbgLyu+FChUVVYrTyXE4MpuEIK/1BQtW4MwpVamkFJLMnGgAlpW3WH7fYz4y2fCwQBzefxH4aLa0qUGV8p7YNL7l3BrS71Mnf4D4IeljcrDjE8Odx0Op24ev3CqqaaD7/VW03aQPwyPN3l+qJoYeXeXt0jmvQ5UWUWwSlaF+5TSy7Pl3EwnOFYYAdlpre0CjLK/Bqh6ddsQ2nZkn859RKe2/ZWnGozHqnNlSTQNhBNvtjyUY6SEFLs1TGgb6jT4Rsg+0vZdpoPLBDhqIkacQI+9VsqTVKvTkEKijS0RlK3R8FsqhzAEQZgdIjwlfZf4eYkattkcfFSOXzb+U/T0XzHtlh4oXOmgd4h58fmAtt/DV4z1dfxMYY8iZPzVudmaUKs3lQqpoVhXZVOSd2TB+KJBQ1RwUH1SFJSrsL2WVakIZ1dVVrjmqaVSSl9zY3EOaVHvN1DPCroVN/NPd9BJVieShcsBYY3jTzRJcCQFA24zDzXUwpg9PDTAXJ61oheJ/ZQvuMmKQASfEa411iJTbvNElv7Mvf0SylG1QYr7EJql2wK0VhceBC1rINATSwoNDQOKltvQzqjxpHJL7ii0kp+63bEQlN1aEGfijkxuPZLTFlS3I1gryhUgp5XAyxzCV0LSJJ3+ihPDUtHPoNsyOalfbJTcVskFp1mCF7Wv5CSUqTiAspbkyoXdTYDmhZdyKmJAkhR53HiL4CKRXyDto3/qqszAc7jzj30X1a3ryV81/iDDbox+YNcfMQPotPpKWhoPZnMHoTUIJ0GnrroFuaFs0AQFicLBDh1cfiVv7VhgLTl7NuDovt6cJvaoGg0JpQICRR+zTYXbaFGB6EYOIVlEyVRUiUth9JytlVUSFIvHNUIPs+ffxLtczqRG4MHyJAUuwdbJcA82FvyBHsmnbmgS1rgNJieR4H3SXsrPfUo/qM8ZG0e6VME0fSmXKJFQEShKdJeVXQEObXZnZCo6Vz6o2QNzcwd0E+6JKzTnugJjCqQqGvymUC+4IMKJryUItlQyvclxgbKbK4DZXjKctgKFW2huX7lO5cQhbLwZgU1tHB2qzvcwmuDHhwVcc7OlHVjbMuQ72uJXKnuEaPahIQ7X6+6LMJfWJDl5TUq0yxRiZdEtOyOwqpLeWyFr1xl0+alh922NOa04oyhG5HMe5lW4Sh3VuSIpN0lbIZFkbSItUK74Fs8QhGXog803vdQspiDdVk9Q3jYTxwc8k/f+UXaWskOPDgh7W4bGuiOF0AFm1fIUEuLmHSVz64IQ1yM5XjqRAkJeSa7Ayl1fKsF/ESlmqsqAGcrQ7rqdfotXc1/EAdDsqcbtWGl3jm5soiOhIP0+af08vbmv0fBUpcX/AMzF9mbXvK08GifVaXE7809GjUqrs5Zhhc4bPaCPIrr+we9xLT99P1W5v5G2CqIubjdwNmz1Mfqr6Hauq0gPYAOOv7qhvZsH/uPcf7tvgp3OBsayGzoBqAAdGhokga6NG/UouUQqMzb4HiraoEEGeRlX4zeVKTSWgT10Cz/YqzyaniVtcVshUp7TpCnxdWitq0mfM6/a25L8pcG5pjK15JgEmAGknRpPoVpsBvS//wAzXH1B2mCCoUOzzA8FzT4fw67bxE+Z+K0FvhdIukMGb+o6u8s26dSvoRx49l93S7yhUaRJyn4gSEj7K4VH+67bOQBxnQz7rVd3AI6Ki2ohtNobsSXD11TPSITlSGFGpwUbx3hKnRoRqV1eNZClykZzH39wc0BWWxI3RN5btDyd+P7Ie5qiNFmXexWqK7syQqKTtfvgoUKslWfyxJ04rk2mMtqzQWTxlQlzdw4cpXWVs4DVC3lHLvt9U+Rt0P5Ds4JkJxhDJHqUisGjLPVaHBD4T5lWwx4ySDPoOhcrSuW2iNiJ99CWXGJgHqqrupCR1nEuXzuKM5zu9F0On3OcQFRRLmnQoa2q8hMcY+4RtoA9wB0+9l6TTegvRoMLaSJKY1rnK1CUcrWoGtcSddpVOUcMaXZGrDX1M/kgb+yETxTS2pyoXtLwpcsOcOUgaMRdUnBxhG2tJ2x+wrazDO25RFo3QyvLnbjo5ELxsAc+iEdea5SPVH3tYR0SdrwXKcY+TpfRZUtGu1KEqsDiKRGj5b68PoratMk6Ex7nlPBeaAgzqD57awfXjxWvDB6kxFKmmhYykKb2Ux+HKW/A/WEdRp8eJ9kJilOHNcJga/5+KufcbAcFvvVnpRab0Mm0GkapdidJrRH2Vc+9DGiTqdhz6pNUux3md5np+gS3yLNUOcMEERoFtKY8A5LAYbibXu0BHQx+q2dLEGNa0OIngJVYyS0SyQbpoGu8maJgjgUfYsgJfifd1BJMHgRwPmhsOvywhjzvsRx5TyPRKnxkFx5R/R9c/hd5H2ULaMlP+wfNU3VbSOYPRD4fXEjyHlpyRyTpGTJpDzUBA3FQnhKLq1NEuuaxbsOChzS8kmKb6tA9fdLTUmeqvxF/XzU8Ptc2qyz/AK0C7F1qw5oC0NrQ0E7oZlABxPom1oBHNPF7HSovYwHZLcXw8kSPNMW1gN1AVw8gKjlboILh1kYko2ycQdNOiYhgAQtCn4pWpwaX6DlYWCea9XL1dxYtmIvKmcwEuq04kdR9dPvkjbQzqqsQ09Vi9NF1ZRbYbhzm5OSkaJb4joJ00UcBDZbO0jfffaFoMey9y6YnSPORstqVxv6BPWhSzEJGpQFe6OcQdiuoN003lXNw/ckFeZnVytiSbHVpigAn5K6ribXCB81l6tfu9OCGGJ5ndFV+oyVxENHXrt2XtG2cG5oOvsgW0RAP3KZ0cVZlgnUcEIQjKT5MLE19qCklIlpMzpr99FprWk109Sl+P2DW+Jpg+/olhjdcn0JL7An3JnXbbhrHDylCNc41AqO9gx9+S61uodO65OXP8EYdiDZY/QyNvIDVZ+zvh3hHPKY94WpFU6tI1O/TosVj9I0quu4123YdvXSFtg1JUa8E6LcZLjWeSTBjKekbIKm0VDlFUZuLSYIHlupXt2HtZsOuu0KTrJtTKSPE3ZzTDh1BGqotI2KpMa2OHuaNCJ01nXzTnBcIfJzvnUxuTqhsIuKjQAXMfBJ/3GNnXq2NvqtJYXNZwy5mMG/+22DrPEk8+CRRs0ODSuv9F+IXFO3e2k4VX1HjM2m0SS0ECXSYaJO56oXvyKzqccBrMwZBBWgoYVTpAlo8RjM5xLnGBALnHU6ADXgFnq1cd89wGrWjfTMdmjzJ0Ra2Rk9D+rcZ9AfwNgnkTBHn+68sHZdtUpbckgUhzLnkbFxJ8M/fBMrQDjwUs0vBgyzt0aCkZUq9tm0hV2sBoMo+lVaRunhCMuydmWuMMOYiJAPxRlGxAbDdCnHcgEuPFAX9VrQYOqjkhx2GIvokTH31RtqIJEoKzb4Z4ogVYaSoxi0V8FWIOEnVFWFAkT9+XySulTL3HX0589U7tTAhaMUNnSCGVDuuoVJMLnOG3JU258So5PlVi1oZZl6hi5eqnusWjFUXgFRuW5iDwCTsuzmhMXVjlU060WjFFFze93seKs/1EuGpJWdxAPLttEbhoOxU5WNJJmrwGiHOzO9Fqe5ELHYNclro4LUG88Ki/wBJtCS/w8ud0QtvhcE6J42uHHRWM3nosKyVNJgcL2K30TETogL2ycC0jTXXqn5qtDvER+6ID2nYifotvtKUrTJyE+HUXN1UcUpOf4QJ5/unQczhEcfqhalVjQSeaOSKjHjYjRmK+EiZ4pdSs3NdIGxmT0Wnq3AceQ6ou6oMNI7DRDDKM068CcTJisQZO8z5obHMPNannd4T+Q+W/mOaZ2NgH1fFpTptzv8A/n1/VK62KGtcvB0aGQxvANBEABaIrXI0+nhylvowlVr6RLHCIOn7H1TTD7ggbn1I+CZ4tZtqCDvrB5JExrqTsrh68COcrTFqa/S7TgzRf6hUEZQ34SnuC39Zx1ygaax8gkmF5HAEgdeGw5JvaVGgmBrw02Km47NKm2uzQXF7wBkmdeEcVn6NualTu2/ic7MTwDQBHzM+i8v7gAmDyk7fZMLQ4DY923M4eN2pncDg30901JIi3bGmH4cyDQjTIHA8c5cczvXRKri0LKhB0j59Vo7QDvGnm0j2KKxGxFQf8hsfoUuTB7kLXa/0x5l8hHSmOiYWRG6Hq+HQ7jgqKdUjULMnwdsQaXteG6LI3FQl+3FPnumEJVtdZXTl7jsJ5bMMaKmrQcJ10TnDrbRW17UN1VI4m1Y6kLcNZG+6b0aQInigm0NdNkZRfl0JVsUePY0ii9bl2Q1o+NSir7UEqiyoZgpS/ptBXRLvl4iP5ReKVs6j5/aWszzRdSiQETgtKdeqZ18OL+KpGcWrYYujO90Cp06ABnkrsQtDT4yh6FSUElJ2iiLnmDPFNYcWdIQDWAD9UTZ3YIhc412Bq+gGncuY6OaY0b4xBKouqY3Si7qOGg06/RQfpoz7IyTix7Xp5wDJ1U7G3JcWk7JLY3bxuU0bdOADuKGWoJJIS62x2+mGhBscAdVKlNTc/BU3WDOdPjg8on6roYJ8lJLRz6PbprX6BVutTAEkhVYVgNwHSXBreu58mrT0qDWDaT1WuPp3PbVE0KBhmWiW8XmXc44D75rAX1DJekcqfuf2X1t7JXzftdQy3oPOm3/2cq5YqKo2+me6Aq1KUHcWTXthw0+BB6J0ylmCkbWVlUjbKBn7fD3t0a4ZeTgfcFNrXCq1TTNTbpEjMUQLYynOFgjcKiyNsT20ke2GBUqRDtXvHF2wPMDgm1FVlemoGiU92Jxout74fzdOiN+6e/4FgHuVo1867J1HVsRq1fysp5AepcCfb5r6Idlqw/yY/UKpFNxbsd+IevFVDD2geE/FEEqQKM8UJ9ohdCmpaFpkhefy0wmzX8F2RvJQXpIroPIrtqYaEJf1RIbzVt/na0lozRy3+HFK8MZm8bpzHeeHRVk6+KGivIxo0xxUbkDhvKuLNEJfOy+6ElSGu2eVx4Y5omzpANSrvS6PNOqRgKKScwvRZkXKp1dcq/AXZlsCsyyA4dd08quaGpbZ0jGaZMaQUHib6p0JgLB7mOMeI6QD2huw4ZW7/RKbMQin04KKwu2D3gcP0TQaxwKJEBTcddx1VZa4GfZah2HmOCRig4Eh0aFBZHLwFPYNUuoGu6TX17rAROOujZIbVhLpKpB/YJd0aeytiQJTStTIYTHpxVvZ5neAQJjf/K07KDRrAJ58vJDFheRtvonlUV0IcDw6sQC85G8AR4j6cFogA0afHivQV65q9CGNQWiFlDq/JVPBJkn0ClUaoZ0X+hQXS8TA6Nxssf20tJq03xplInqDIHutnaGWeSWY/a95SdA1b4h6b/KVDNFuBowS4zRiaGiLplD1GqVN0Lz0j1RkykDqiGaKuzdKsuXQqom+y01ktxW4dGVurnaAdSvDW3JKMsrEgd68Q4jwg/laeJ6n2VccHN0TyzWNWE9kbAUpA6Anm7UuK1oSfDaAdQGXck68QZj2hEU7hzNH6jnxA6rR7ixumtfZ58oue12F1BClTXBwcJBlRYrX5REiDDlMnVQI8SlUKJxZKhUoNOux5jf15r0FSldpgB3syj6pDi1UuMBadKL7DIdnbJ5jl1Cz54S4/EpCSvYJYUoCIfcwFZZskSqLyhqpxg1Ae7YOay5UupOlcs/tyCEYJlDBzQvaC8Y0aoA1SxsDksZimJOLyCST1UY44vSHSGd3iElaHsvQcQHbcvVYqxol51MffL6r6dhJblGWIjbl06hVeK+wylS0Mn/h9FkcdugwkgrX1gCPRLKuHtcCXAHzS5JcehI6PlzrkvcSTpKe9msBdXdmPhpA6ni4/wBLf1V97gQdXptYIDj4o4NG5W4p02sa1rRDQIAHALVgUckeXgWUmiy0t2MaGMAa0cB9eZV7FVTMqdErYiR7Cr7yN1dChVZISs48eAULUaptJaddlc9kiQuvkg1QJTuyyRzTGg4PYDwI29wlNzTU8Nushyn8JPwKgsnGVPoo42rRnsRw91N5aRpMtPNvBCigt3iNmKjSOO4PI/osi5hBIdoQYU8mLizdhz81+lVuwgqV1VAGpU6jwG8kwwnBC8ipWbDQZaw8eRf06fFLDG5OkNkyqKtlWAYRnitUHh3Y08f+RHLkmuKU5HumjkJVC3wgoqkeZPI5ytgOB3WVxYTodR5puGTJPp5JDc0crp+/LonVlWzUxBkwAZ305pKvTC35RWy2My0kH73CvYXbGNNdOKsohTI1lLHEo/yCU2+zxg4qqqVc8oeqqilo2UgV5HhUGOXWAuJUyUO9ytARRzB3UspJGx18igbyp4gE2c2Qll0wfBSn8R4OyBd0XJNVxQAkamFyj7qLcGK72r4dFl24dmeSeJ4dV4uWaHVjpDCvbZG6naYA5ECI5DeVTYdqTSdDpg8um2i8XJ5xUlTElpGxsO0IqNEcUVc4pDIXLlhrwHwQwPxzUI1MgdAD+vsmtcrly9fFFRgkiD7JWj9Fc10LlyonoD7L1D7+/kvFyLAV1m5hHzQtKvldlP8AlerlKbqmh470E1aYIS6tRhcuS5Yphgw/CbvMMjt27HmFO7w6m8y5snmCRt5Lly70snPH8vDaOyfGWiNDC6TCCGyeBcSY8pRZcuXLWkl0Scm+yLiqXLlyIoPVpyEBmNN0jf36FcuSZVqymN7HlpXD2hw9fNEgrlyEXaBJUyuqqnrly5nFvBU0zuvVy5nHEojNC5cijjxyzfaS4c14a38zd/Uj6LxcpZ/5Hxf0J22J5rly5eaa7Z//2Q==";
    const miguel = "Miguel López";
    const miguelPhoto =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCgKIf2QHRmMmxcO8I1LjN1R9s3DHgvfdkO_1uhHhGD6w8mQe";
    const yesenia = "Yesenia Jimenéz";
    const yeseniaPhoto =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yf8Pga3Ut1V9Y1CEt9bnPYDgyM40mySFSFOD-0oHwr75oNHswA";

    return (
      <div className="App">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              CAJEROS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              MESEROS
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab2 === "1"
                      })}
                      onClick={() => {
                        this.toggle2("1");
                      }}
                    >
                      MARIA ESTEFANIA
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab2 === "2"
                      })}
                      onClick={() => {
                        this.toggle2("2");
                      }}
                    >
                      JOSE HERNANDÉZ
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab2}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Navbar name={maria} photo={mariaPhoto} />
                        <Menu />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                        <Navbar name={jose} photo={josePhoto} />
                        <Menu />
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab3 === "1"
                      })}
                      onClick={() => {
                        this.toggle3("1");
                      }}
                    >
                      OMAR ZAGAL
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab3 === "2"
                      })}
                      onClick={() => {
                        this.toggle3("2");
                      }}
                    >
                      MIGUEL LÓPEZ
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab3 === "3"
                      })}
                      onClick={() => {
                        this.toggle3("3");
                      }}
                    >
                      YESENIA JIMÉNEZ
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab3}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Navbar name={omar} photo={omarPhoto} />
                        <Menu />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <Navbar name={miguel} photo={miguelPhoto} />
                        <Menu />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        <Navbar name={yesenia} photo={yeseniaPhoto} />
                        <Menu />
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;
