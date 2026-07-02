// Auto-generated from Consolidated_Productivity-Rev_1-02-Jul-26.xlsx — do not edit by hand
const PRODUCTIVITY_DATA = {
 "revision": "Rev 1",
 "date": "02-Jul-26",
 "labourTypes": [
  "Labour",
  "Carpenter",
  "Steel Fixer",
  "Pipe Fitter",
  "Mason",
  "Electrician",
  "Scaffolder",
  "Grade Checker"
 ],
 "equipmentTypes": [
  "Excavator",
  "Shovel",
  "Bob Cat",
  "PTR",
  "Paver",
  "Roller",
  "Baby Roller",
  "Plate Compactor",
  "Water Tanker",
  "Grader",
  "Crane",
  "Spray Tanker",
  "Piling Rig",
  "Pile Cutting Machine",
  "Dozer",
  "TBM Machine",
  "Shoring Machine"
 ],
 "rates": [
  {
   "ref": "",
   "desc": "General Items",
   "unit": "",
   "rate": null,
   "rateText": "1 DAY",
   "boq": "GEN",
   "code": "GEN",
   "source": "P1",
   "section": "General",
   "labour": {
    "Labour": 10
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Initial Mobilization",
   "unit": "",
   "rate": null,
   "rateText": "1 DAY",
   "boq": "GEN",
   "code": "IM",
   "source": "P1",
   "section": "Mobilization",
   "labour": {
    "Labour": 15,
    "Carpenter": 2,
    "Mason": 2,
    "Electrician": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Establishment of offices for the Engineer's Staff",
   "unit": "",
   "rate": null,
   "rateText": "1 DAY",
   "boq": "GEN",
   "code": "ESF",
   "source": "P1",
   "section": "Mobilization",
   "labour": {
    "Labour": 15,
    "Carpenter": 2,
    "Mason": 2,
    "Electrician": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Establishment of offices for the Contractor's Staff",
   "unit": "",
   "rate": null,
   "rateText": "1 DAY",
   "boq": "GEN",
   "code": "ECF",
   "source": "P1",
   "section": "Mobilization",
   "labour": {
    "Labour": 15,
    "Carpenter": 2,
    "Mason": 2,
    "Electrician": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Erection of Project Sign Board",
   "unit": "",
   "rate": null,
   "rateText": "1 DAY",
   "boq": "GEN",
   "code": "SGB",
   "source": "P1",
   "section": "Mobilization",
   "labour": {
    "Labour": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "EXC",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 3
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Formation preparation & Bedding",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "FRP",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Water Tanker": 0.1,
    "Baby Roller": 0.2
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Laying of Pipes",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "PL",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 3,
    "Pipe Fitter": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Back Filling",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "BF",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 3
   },
   "equipment": {
    "Shovel": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Manhole",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "SEW",
   "code": "MH",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Cover and Frame",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "SEW",
   "code": "C&F",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 0.5,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing-",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "TS",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Construction of Sewerage Discharge Chamber",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "SEW",
   "code": "CH",
   "source": "P1",
   "section": "Sewer-Main line",
   "labour": {
    "Labour": 8,
    "Carpenter": 4,
    "Steel Fixer": 4,
    "Mason": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation of House connection",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "HC.EXC",
   "source": "P1",
   "section": "Sewer -House Connection",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pipe Laying for house connection",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "HC.PL",
   "source": "P1",
   "section": "Sewer -House Connection",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Backfilling of house connection",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "HC.BF",
   "source": "P1",
   "section": "Sewer -House Connection",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Bob Cat": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of House connection chambers",
   "unit": "nr",
   "rate": 4,
   "rateText": null,
   "boq": "SEW",
   "code": "HC.CH",
   "source": "P1",
   "section": "Sewer -House Connection",
   "labour": {
    "Labour": 1,
    "Carpenter": 1,
    "Steel Fixer": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing of house connection",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SEW",
   "code": "HC.TS",
   "source": "P1",
   "section": "Sewer -House Connection",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Dewatering Setup",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "DE",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "EXC",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Formation preparation & Bedding",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "FRP",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Water Tanker": 0.1,
    "Baby Roller": 0.2
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pipe Laying for Storm water",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "PL",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Manhole / Catch basins (Fixing)",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "SWD",
   "code": "MH/CB",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 2,
    "Carpenter": 0.5,
    "Steel Fixer": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Back Filling",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "BF",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Shovel": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing",
   "unit": "m",
   "rate": 100,
   "rateText": null,
   "boq": "SWD",
   "code": "TS",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Cover and Frame",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "SWD",
   "code": "C&F",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 0.5,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Gullies",
   "unit": "nr",
   "rate": 4,
   "rateText": null,
   "boq": "SWD",
   "code": "GUL",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 0.5,
    "Mason": 4
   },
   "equipment": {
    "Excavator": 0.25,
    "Shovel": 0.2,
    "Water Tanker": 0.1,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Construction of over flow chamber",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "SWD",
   "code": "CH",
   "source": "P1",
   "section": "Stormwater Drainage-Mainline",
   "labour": {
    "Labour": 4,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation of Catchbasin & Pipe",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "CB.EXC",
   "source": "P1",
   "section": "Surface water Drainage-catch basin",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pipe Laying for Catchbasin",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "CB.PL",
   "source": "P1",
   "section": "Surface water Drainage-catch basin",
   "labour": {
    "Labour": 1,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Catchbasin",
   "unit": "nr",
   "rate": 2.5,
   "rateText": null,
   "boq": "SWD",
   "code": "CB-F",
   "source": "P1",
   "section": "Surface water Drainage-catch basin",
   "labour": {
    "Labour": 1,
    "Carpenter": 0.5,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Backfilling of Catchbasin",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "CB-BF",
   "source": "P1",
   "section": "Surface water Drainage-catch basin",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Bob Cat": 0.5,
    "Water Tanker": 0.2,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing of Catchbasin",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "SWD",
   "code": "CB-TS",
   "source": "P1",
   "section": "Surface water Drainage-catch basin",
   "labour": {
    "Labour": 1,
    "Pipe Fitter": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "FF",
   "code": "EXC",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Formation preparation",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "FF",
   "code": "FRP",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pipe Laying",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "FF",
   "code": "PL",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Construction of Distribution Chamber (Fixing)",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "FF",
   "code": "CH",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Valve Chamber with fittings(Fixing)",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "FF",
   "code": "CH",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 2,
    "Carpenter": 0.5,
    "Mason": 0.25
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Valve & fittings",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "FF",
   "code": "VLV",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 1,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Back Filling",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "FF",
   "code": "BF",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Shovel": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing",
   "unit": "m",
   "rate": 40,
   "rateText": null,
   "boq": "FF",
   "code": "TS",
   "source": "P1",
   "section": "Fire Fighting",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "IRR",
   "code": "EXC",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Formation preparation",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "IRR",
   "code": "FRP",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pipe Laying",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "IRR",
   "code": "PL",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Construction of Distribution Chamber (Fixing)",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "IRR",
   "code": "CH",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Valve Chamber with fittings(Fixing)",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "IRR",
   "code": "CH",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 2,
    "Carpenter": 0.5,
    "Mason": 0.25
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Valve & fittings",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "IRR",
   "code": "VLV",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 1,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Back Filling",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "IRR",
   "code": "BF",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Shovel": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing",
   "unit": "m",
   "rate": 40,
   "rateText": null,
   "boq": "IRR",
   "code": "TS",
   "source": "P1",
   "section": "Irrigation",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation",
   "unit": "m",
   "rate": 32,
   "rateText": null,
   "boq": "PW",
   "code": "EXC",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Formation preparation",
   "unit": "m",
   "rate": 32,
   "rateText": null,
   "boq": "PW",
   "code": "FRP",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pipe Laying",
   "unit": "m",
   "rate": 72,
   "rateText": null,
   "boq": "PW",
   "code": "PL",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 5,
    "Pipe Fitter": 1
   },
   "equipment": {
    "Crane": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Valve Chamber(Fixing)",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "PW",
   "code": "CH",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 2,
    "Carpenter": 0.5,
    "Mason": 0.25
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Valve Chamber(in situ)",
   "unit": "nr",
   "rate": 0.07,
   "rateText": null,
   "boq": "PW",
   "code": "CHI",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 8,
    "Carpenter": 3,
    "Steel Fixer": 3,
    "Pipe Fitter": 0.5,
    "Mason": 1
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Valve (Fixing)",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "PW",
   "code": "VLV",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Construction of thrust blocks",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "PW",
   "code": "",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Pipe Fitter": 0.5,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Back Filling",
   "unit": "m",
   "rate": 32,
   "rateText": null,
   "boq": "PW",
   "code": "BF",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 10
   },
   "equipment": {
    "Shovel": 1,
    "Bob Cat": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing",
   "unit": "m",
   "rate": 500,
   "rateText": null,
   "boq": "PW",
   "code": "TS",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 8,
    "Pipe Fitter": 4,
    "Electrician": 1
   },
   "equipment": {
    "Water Tanker": 0.1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "House Connection",
   "unit": "nr",
   "rate": 40,
   "rateText": null,
   "boq": "PW",
   "code": "HC",
   "source": "P1",
   "section": "Potable Water",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 1
   },
   "equipment": {
    "Excavator": 1,
    "Bob Cat": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation",
   "unit": "m",
   "rate": 80,
   "rateText": null,
   "boq": "TEL",
   "code": "EXC",
   "source": "P1",
   "section": "Telecom",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "laying of Ducts",
   "unit": "m",
   "rate": 80,
   "rateText": null,
   "boq": "TEL",
   "code": "DUC",
   "source": "P1",
   "section": "Telecom",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "JRC Chambers",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "TEL",
   "code": "CH",
   "source": "P1",
   "section": "Telecom",
   "labour": {
    "Labour": 2,
    "Mason": 1
   },
   "equipment": {
    "Crane": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Concrete Encasement",
   "unit": "m",
   "rate": 20,
   "rateText": null,
   "boq": "TEL",
   "code": "",
   "source": "P1",
   "section": "Telecom",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Steel Fixer": 1,
    "Mason": 0.25
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Backfilling",
   "unit": "m",
   "rate": 80,
   "rateText": null,
   "boq": "TEL",
   "code": "BF",
   "source": "P1",
   "section": "Telecom",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Shovel": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing",
   "unit": "m",
   "rate": 80,
   "rateText": null,
   "boq": "TEL",
   "code": "TS",
   "source": "P1",
   "section": "Telecom",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Chamber Covers",
   "unit": "nr",
   "rate": 3,
   "rateText": null,
   "boq": "TEL",
   "code": "C&F",
   "source": "P1",
   "section": "Telecom",
   "labour": {
    "Labour": 0.5,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "ST",
   "code": "EXC",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Street light duct and cable laying",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "ST",
   "code": "DUC-CBL",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 2,
    "Pipe Fitter": 1,
    "Electrician": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Street light Foundation(Fixing)",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "ST",
   "code": "PFF",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Feeder pillar/Chamber (Fixing)",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "ST",
   "code": "FPC",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 1,
    "Carpenter": 0.25,
    "Mason": 0.25,
    "Electrician": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pole Fixing",
   "unit": "nr",
   "rate": 3,
   "rateText": null,
   "boq": "ST",
   "code": "PLF",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 3,
    "Electrician": 0.5
   },
   "equipment": {
    "Crane": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Cable Laying",
   "unit": "m",
   "rate": 90,
   "rateText": null,
   "boq": "ST",
   "code": "DUC-CBL",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 2,
    "Electrician": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Backfilling",
   "unit": "m",
   "rate": 60,
   "rateText": null,
   "boq": "ST",
   "code": "BF",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Bob Cat": 0.5,
    "Water Tanker": 0.1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Earthing system",
   "unit": "m",
   "rate": 1,
   "rateText": null,
   "boq": "ST",
   "code": "ES",
   "source": "P1",
   "section": "Street lighting",
   "labour": {
    "Labour": 1,
    "Electrician": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Construction of Substation foundation",
   "unit": "nr",
   "rate": 0.15,
   "rateText": null,
   "boq": "Ele",
   "code": "SSF",
   "source": "P1",
   "section": "Electricity -HV/LV Cable",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": [
    "Activity code was #REF! in source; assigned SSF per Activity List usage \u2014 confirmed 02-Jul-26"
   ]
  },
  {
   "ref": "",
   "desc": "Formation Preparation",
   "unit": "m2",
   "rate": 1000,
   "rateText": null,
   "boq": "EW",
   "code": "FRP",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 3,
    "Grade Checker": 1
   },
   "equipment": {
    "Roller": 1,
    "Water Tanker": 0.25,
    "Grader": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Sub-base",
   "unit": "m2",
   "rate": 1000,
   "rateText": null,
   "boq": "RW",
   "code": "SB",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 3,
    "Grade Checker": 1
   },
   "equipment": {
    "PTR": 1,
    "Roller": 1,
    "Water Tanker": 0.25,
    "Grader": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Kerb stone",
   "unit": "m",
   "rate": 75,
   "rateText": null,
   "boq": "RW",
   "code": "KRB",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Mason": 1
   },
   "equipment": {
    "Bob Cat": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Gravel Road-base",
   "unit": "m2",
   "rate": 1500,
   "rateText": null,
   "boq": "RW",
   "code": "RB",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 3
   },
   "equipment": {
    "Bob Cat": 0.5,
    "PTR": 2,
    "Paver": 1,
    "Roller": 1,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Prime Coat",
   "unit": "m2",
   "rate": 3000,
   "rateText": null,
   "boq": "RW",
   "code": "PC",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Spray Tanker": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Tack Coat",
   "unit": "m2",
   "rate": 3000,
   "rateText": null,
   "boq": "RW",
   "code": "TC",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Spray Tanker": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Binder Course",
   "unit": "m2",
   "rate": 3000,
   "rateText": null,
   "boq": "RW",
   "code": "BC",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 10
   },
   "equipment": {
    "PTR": 2,
    "Paver": 1,
    "Roller": 1,
    "Baby Roller": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Wearing Course",
   "unit": "m2",
   "rate": 3000,
   "rateText": null,
   "boq": "RW",
   "code": "WC",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 10
   },
   "equipment": {
    "PTR": 2,
    "Paver": 1,
    "Roller": 1,
    "Baby Roller": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Laying of 80mm interlock tiles",
   "unit": "m2",
   "rate": 250,
   "rateText": null,
   "boq": "RW",
   "code": "IL.80",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {
    "Bob Cat": 0.5
   },
   "flags": [
    "Unit corrected m3 \u2192 m2, confirmed by Nandakumar 02-Jul-26 (source read m3)"
   ]
  },
  {
   "ref": "",
   "desc": "60mm interlock paving",
   "unit": "m2",
   "rate": 250,
   "rateText": null,
   "boq": "RW",
   "code": "IL.60",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {
    "Bob Cat": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Road Marking",
   "unit": "m2",
   "rate": 1000,
   "rateText": null,
   "boq": "RW",
   "code": "RM",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Traffic Signs",
   "unit": "nr",
   "rate": 9,
   "rateText": null,
   "boq": "RW",
   "code": "TS",
   "source": "P1",
   "section": "Road Works- Carriageway",
   "labour": {
    "Labour": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Earthwork cutting & Filling",
   "unit": "m3",
   "rate": 2500,
   "rateText": null,
   "boq": "EW",
   "code": "EWCF",
   "source": "P1",
   "section": "Earthwork",
   "labour": {
    "Labour": 10
   },
   "equipment": {
    "Excavator": 1,
    "Shovel": 1,
    "Dozer": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Sewer Manhole",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "SEW",
   "code": "PC-MH",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 3,
    "Carpenter": 3,
    "Steel Fixer": 3,
    "Mason": 1.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Storm water Manhole",
   "unit": "nr",
   "rate": 0.6,
   "rateText": null,
   "boq": "SWD",
   "code": "PC-MH",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 3,
    "Carpenter": 3,
    "Steel Fixer": 3,
    "Mason": 1.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Sewer HC",
   "unit": "nr",
   "rate": 5,
   "rateText": null,
   "boq": "SEW",
   "code": "PC-HC",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Catch basin",
   "unit": "nr",
   "rate": 3,
   "rateText": null,
   "boq": "SWD",
   "code": "PC-CB",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Fire Fighting Valve Chamber",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "FF",
   "code": "PC-CH",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Irrigation Valve Chamber",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "IRR",
   "code": "PC-CH",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Potable Water Valve Chamber",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "PW",
   "code": "PC-CH",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast JRC Chambers pre-cast",
   "unit": "nr",
   "rate": 0.5,
   "rateText": null,
   "boq": "TEL",
   "code": "PC-CH",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 3,
    "Carpenter": 3,
    "Steel Fixer": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Street Light Draw pit chamber",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "ST",
   "code": "PC-DP",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Steel Fixer": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Street light Foundation",
   "unit": "nr",
   "rate": 1.5,
   "rateText": null,
   "boq": "ST",
   "code": "PC-SLF",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Steel Fixer": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Street light chamber",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "ST",
   "code": "PC-CH",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 1,
    "Carpenter": 1,
    "Steel Fixer": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Pre-cast Street light feeder pillar",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "ST",
   "code": "PC-FPF",
   "source": "P1",
   "section": "Pre-cast",
   "labour": {
    "Labour": 1,
    "Carpenter": 1,
    "Steel Fixer": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "General Clearance",
   "unit": "m2",
   "rate": 5000,
   "rateText": null,
   "boq": "D&S",
   "code": "DMSC",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 10
   },
   "equipment": {
    "Shovel": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "unit": "m2",
   "rate": 5000,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Shovel": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Remove existing Duct and Cables network",
   "unit": "m",
   "rate": 100,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Removal of Existing Street light pole foundation",
   "unit": "nr",
   "rate": 20,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Shovel": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Trial Trenches to locate the existing services",
   "unit": "m3",
   "rate": 100,
   "rateText": null,
   "boq": "GI",
   "code": "TT",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 20
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Bore holes and taking tests",
   "unit": "nr",
   "rate": 5,
   "rateText": null,
   "boq": "GI",
   "code": "BH",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 0.4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Remove existing trees",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Shovel": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Removal of Kerbs",
   "unit": "m",
   "rate": 500,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 5
   },
   "equipment": {
    "Shovel": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Remove traffic signs",
   "unit": "nr",
   "rate": 10,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Removal of signal posts",
   "unit": "nr",
   "rate": 10,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 3
   },
   "equipment": {
    "Shovel": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Demolish existing manholes/chambers",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 5
   },
   "equipment": {
    "Excavator": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Removal of existing pipe work",
   "unit": "m",
   "rate": 100,
   "rateText": null,
   "boq": "D&S",
   "code": "",
   "source": "P1",
   "section": "General Clearance,Breakout & remove pavement layer & kerbs,traffic signs & Trees",
   "labour": {
    "Labour": 5
   },
   "equipment": {
    "Excavator": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation, Laying & Backfilling of Ducts",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "ELE",
   "code": "RCD",
   "source": "P1",
   "section": "Road Crossing Duct",
   "labour": {
    "Labour": 3,
    "Pipe Fitter": 0.5
   },
   "equipment": {
    "Excavator": 0.2,
    "Water Tanker": 0.1,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation, Laying & Backfilling of Ducts",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "ST",
   "code": "RCD",
   "source": "P1",
   "section": "Road Crossing Duct",
   "labour": {
    "Labour": 3,
    "Pipe Fitter": 0.5
   },
   "equipment": {
    "Excavator": 0.2,
    "Water Tanker": 0.1,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation, Laying & Backfilling of Ducts",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "IRR",
   "code": "RCD",
   "source": "P1",
   "section": "Road Crossing Duct",
   "labour": {
    "Labour": 3,
    "Pipe Fitter": 0.5
   },
   "equipment": {
    "Excavator": 0.2,
    "Water Tanker": 0.1,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation, Laying & Backfilling of Ducts",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "PW",
   "code": "RCD",
   "source": "P1",
   "section": "Road Crossing Duct",
   "labour": {
    "Labour": 3,
    "Pipe Fitter": 0.5
   },
   "equipment": {
    "Excavator": 0.2,
    "Water Tanker": 0.1,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Setting Out-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SET",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation for Foundation,Road base & Compaction-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "EXC",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Excavator": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Blinding for Foundation, Water Proofing & Screed-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BLWP",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 3,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering & Steel Fixing of Foundation-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SH&SF.F",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2.67,
    "Carpenter": 1.33,
    "Steel Fixer": 1.33,
    "Mason": 1.33
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Casting of Foundation-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "F.CAST",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 10,
    "Mason": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering, Steel Fixing & Casting of Neck Column-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SH&SF.N",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Waterproofing for Foundation & Neck Column-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "WP.NC",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Solid Block Under Tie Beams-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SBUTB",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering & Steel Fixing of Tie Beam-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SH&SF.T",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Casting of Tie Beam-MMR (/P-1)-STRUCTURE",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "TB.CAST",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 10,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Waterproofing for Tie Beam-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "WP.TB",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Backfilling up to Slab on Grade Level-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BF",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Shovel": 0.5,
    "Water Tanker": 0.2,
    "Baby Roller": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Casting of Slab on Grade (Blinding, Water Proofing)-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SLB.C-1",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering, Steel Fixing & Casting of Column-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "S&S.COL",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1.6,
    "Carpenter": 0.8,
    "Steel Fixer": 0.8,
    "Mason": 0.4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering & Steel Fixing of Roof Slab and parapet-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "S&S.ROF",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 3,
    "Carpenter": 2,
    "Pipe Fitter": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Casting of Roof Slab and parapet-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SLB.C-2",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 10,
    "Mason": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "De-shuttering for Roof Slab-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "SLB.DS",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Block Works-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.ROOM",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Internal & External Plastering-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "PLAST",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Roof Water Proofing-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "WP.ROOF",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Internal & External Painting-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "PAINT",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Doors & Windows-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "D&W",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "External Tiling Works & Ramp-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "TILE",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Canopy-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "CAN",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Epoxy Flooring-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "EPOX",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Final Coat Painting-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "FPAINT",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "MEP Conduits & DB's Enclosure-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "CONDUIT",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Cable Tray,Cable Pulling & DB's dressing-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "CABLE",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1,
    "Electrician": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Laying of external coduits & Manhole work-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "MH&DUCT",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1,
    "Electrician": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Installing Split AC Unit. & MEP Final Fixes-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "AC",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1,
    "Electrician": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation & Compaction-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.EXC",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Excavator": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Blinding for Foundation-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.FOUN",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4.5,
    "Mason": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Waterproofing & Screed-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.WP",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering, Steel Fixing & Casting of Foundation-BW-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.SC.F",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Steel Fixer": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering, Steel Fixing & Casting of Neck Column-BW-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.SC.N",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2.67,
    "Carpenter": 1.33,
    "Steel Fixer": 1.33,
    "Mason": 0.67
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Solid Block Work-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.TB.B",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2.67,
    "Mason": 1.33
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Waterproofing for Neck Column & Solid Block Works-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.NC.W",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Backfilling up to Tie Beam-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.BF",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {
    "Shovel": 0.5
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering & Steel Fixing of Tie Beam-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.SF.B",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering,Steel Fixing & Casting of Columns-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.SC.C",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Steel Fixer": 1,
    "Mason": 0.5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Casting of Tie Beam-MMR (/P-1) BOUNDARY WALL",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.TB.C",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 10,
    "Mason": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Block Works for Boundary Wall-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.BLOC",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4.8,
    "Mason": 2.4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Shuttering,Steel Fixing & Casting of Coping Beam-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.C.CB",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 4,
    "Carpenter": 2,
    "Steel Fixer": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Plastering-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.PLAS",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Painting-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "BW.PAIN",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Fixing of Gate-MMR (/P-1)",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "MMR",
   "code": "GATE",
   "source": "P1",
   "section": "MMR",
   "labour": {
    "Labour": 2,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Box Shoring for Pit",
   "unit": "Pit",
   "rate": 0.25,
   "rateText": null,
   "boq": "PIT",
   "code": "SH-PIT",
   "source": "P1",
   "section": "Pit Works",
   "labour": {
    "Labour": 15,
    "Carpenter": 2,
    "Pipe Fitter": 2,
    "Mason": 1
   },
   "equipment": {
    "Excavator": 1,
    "Water Tanker": 0.25
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Dewatering Setup",
   "unit": "pit",
   "rate": 0.14,
   "rateText": null,
   "boq": "PIT",
   "code": "DE-W",
   "source": "P1",
   "section": "Pit Works",
   "labour": {
    "Labour": 4,
    "Pipe Fitter": 1,
    "Electrician": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Excavation of pit",
   "unit": "m3",
   "rate": 300,
   "rateText": null,
   "boq": "PIT",
   "code": "EX-PIT",
   "source": "P1",
   "section": "Pit Works",
   "labour": {
    "Labour": 8
   },
   "equipment": {
    "Excavator": 1,
    "Crane": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Backfilling of Pit",
   "unit": "layers",
   "rate": 4,
   "rateText": null,
   "boq": "PIT",
   "code": "BF-PIT",
   "source": "P1",
   "section": "Pit Works",
   "labour": {
    "Labour": 3
   },
   "equipment": {
    "Water Tanker": 0.25,
    "Baby Roller": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Reinstatement of Exiting Services / Pavement",
   "unit": "pit",
   "rate": 0.14,
   "rateText": null,
   "boq": "PIT",
   "code": "RES",
   "source": "P1",
   "section": "Pit Works",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Mobilization of Driving Machine",
   "unit": "No.",
   "rate": 0.15,
   "rateText": null,
   "boq": "NDRC",
   "code": "MO-D",
   "source": "P1",
   "section": "NDRC Machine Moblization/Demoblization",
   "labour": {
    "Labour": 6,
    "Carpenter": 2,
    "Steel Fixer": 1,
    "Pipe Fitter": 1,
    "Mason": 1,
    "Electrician": 0.25
   },
   "equipment": {
    "Water Tanker": 1,
    "Crane": 0.1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Re-setup Driving Machine",
   "unit": "No.",
   "rate": 0.15,
   "rateText": null,
   "boq": "NDRC",
   "code": "MO-RS",
   "source": "P1",
   "section": "NDRC Machine Moblization/Demoblization",
   "labour": {
    "Labour": 6,
    "Carpenter": 2,
    "Steel Fixer": 1,
    "Pipe Fitter": 1,
    "Mason": 1,
    "Electrician": 1
   },
   "equipment": {
    "Excavator": 1,
    "Water Tanker": 1,
    "Crane": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Demobilization of Driving Machine",
   "unit": "No.",
   "rate": 0.3,
   "rateText": null,
   "boq": "NDRC",
   "code": "DMO-D",
   "source": "P1",
   "section": "NDRC Machine Moblization/Demoblization",
   "labour": {
    "Labour": 6,
    "Carpenter": 2,
    "Steel Fixer": 1,
    "Pipe Fitter": 1,
    "Mason": 1,
    "Electrician": 0.25
   },
   "equipment": {
    "Excavator": 1,
    "Water Tanker": 1,
    "Crane": 0.1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Driving of Pipe from Pit",
   "unit": "m",
   "rate": 3,
   "rateText": null,
   "boq": "NDRC",
   "code": "DP",
   "source": "P1",
   "section": "Driving Pipe from Pit",
   "labour": {
    "Labour": 6,
    "Electrician": 1
   },
   "equipment": {
    "TBM Machine": 1
   },
   "flags": []
  },
  {
   "ref": "",
   "desc": "Grouting of Pipe",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "NDRC",
   "code": "GT-PP",
   "source": "P1",
   "section": "Driving Pipe from Pit",
   "labour": {
    "Labour": 6,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Testing of Pipe",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "NDRC",
   "code": "TT-PP",
   "source": "P1",
   "section": "Driving Pipe from Pit",
   "labour": {
    "Labour": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Connection to Existing Network",
   "unit": "",
   "rate": null,
   "rateText": null,
   "boq": "NDRC",
   "code": "CONN",
   "source": "P1",
   "section": "Driving Pipe from Pit",
   "labour": {
    "Labour": 10,
    "Pipe Fitter": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "",
   "desc": "Adjust Level of Existing Manholes",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "LEV",
   "code": "",
   "source": "P1",
   "section": "Adjust Level of Existing Manholes",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "TBM Machine": 1
   },
   "flags": []
  },
  {
   "ref": "P01",
   "desc": "Piling 1200\u00d8 bored",
   "unit": "piles",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "PL-1200",
   "source": "P2",
   "section": "Pile",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Piling Rig": 1.0
   },
   "flags": []
  },
  {
   "ref": "P02",
   "desc": "Piling 1500\u00d8 bored",
   "unit": "piles",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "PL-1500",
   "source": "P2",
   "section": "Pile",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Piling Rig": 1.0
   },
   "flags": []
  },
  {
   "ref": "P03",
   "desc": "Pile Excavation",
   "unit": "mob",
   "rate": 0.5,
   "rateText": null,
   "boq": "",
   "code": "PL-EX",
   "source": "P2",
   "section": "Pile",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": []
  },
  {
   "ref": "P04",
   "desc": "Pile Cutting & Preparation",
   "unit": "piles",
   "rate": 5,
   "rateText": null,
   "boq": "",
   "code": "PL-PLC",
   "source": "P2",
   "section": "Pile",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {
    "Pile Cutting Machine": 1.0
   },
   "flags": []
  },
  {
   "ref": "P05",
   "desc": "Blinding Concrete",
   "unit": "m\u00b2",
   "rate": 25,
   "rateText": null,
   "boq": "",
   "code": "PC-BL",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P06",
   "desc": "Pile Cap Reinforcement",
   "unit": "t",
   "rate": 1.4,
   "rateText": null,
   "boq": "",
   "code": "PC-REF",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P07",
   "desc": "Pile Cap Formwork",
   "unit": "m\u00b2",
   "rate": 144,
   "rateText": null,
   "boq": "",
   "code": "PC-FW",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 4,
    "Carpenter": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P08",
   "desc": "Pile Cap Concrete",
   "unit": "m\u00b3",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "PC-CON",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P09",
   "desc": "Pile Cap Curing",
   "unit": "FIXED days",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "PC-CUR",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P10",
   "desc": "Pile Cap FW Removal",
   "unit": "m\u00b2",
   "rate": 70,
   "rateText": null,
   "boq": "",
   "code": "PC-FWR",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P11",
   "desc": "Pile Cap Waterproofing",
   "unit": "m\u00b2",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "PC-WP",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 4
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (2) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P12",
   "desc": "Pile Cap Backfilling",
   "unit": "m\u00b3",
   "rate": 100,
   "rateText": null,
   "boq": "",
   "code": "PC-BF",
   "source": "P2",
   "section": "PC",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Shovel": 0.5,
    "Baby Roller": 1.0,
    "Water Tanker": 0.2
   },
   "flags": []
  },
  {
   "ref": "P13",
   "desc": "Pier Scaffolding",
   "unit": "m\u00b3",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "PR-SCF",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Scaffolder": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P14",
   "desc": "Pier Column Reinforcement",
   "unit": "t",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "PR-REF",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P15",
   "desc": "Pier Column Formwork",
   "unit": "m\u00b2",
   "rate": 48,
   "rateText": null,
   "boq": "",
   "code": "PR-FW",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Carpenter": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P16",
   "desc": "Pier Column Concrete",
   "unit": "m\u00b3",
   "rate": 35,
   "rateText": null,
   "boq": "",
   "code": "PR-CON",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P17",
   "desc": "Pier Column FW Removal",
   "unit": "m\u00b2",
   "rate": 70,
   "rateText": null,
   "boq": "",
   "code": "PR-FWR",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P18",
   "desc": "Pier Head Reinforcement",
   "unit": "t",
   "rate": 1.5,
   "rateText": null,
   "boq": "",
   "code": "PH-REF",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P19",
   "desc": "Pier Head Formwork",
   "unit": "m\u00b2",
   "rate": 48,
   "rateText": null,
   "boq": "",
   "code": "PH-FW",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Carpenter": 6,
    "Scaffolder": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P20",
   "desc": "Pier Head Concrete",
   "unit": "m\u00b3",
   "rate": 45,
   "rateText": null,
   "boq": "",
   "code": "PH-CON",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P21",
   "desc": "Pier Head FW Removal",
   "unit": "m\u00b2",
   "rate": 60,
   "rateText": null,
   "boq": "",
   "code": "PH-FWR",
   "source": "P2",
   "section": "Pier",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P22",
   "desc": "Bearing Installation",
   "unit": "bearings",
   "rate": 4,
   "rateText": null,
   "boq": "",
   "code": "BE-BER",
   "source": "P2",
   "section": "BE",
   "labour": {
    "Labour": 6,
    "Mason": 2
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (4) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P23.a",
   "desc": "Pile Extension Scaffolding",
   "unit": "nr",
   "rate": 2,
   "rateText": null,
   "boq": "",
   "code": "PE-SCF",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 4,
    "Scaffolder": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P23",
   "desc": "Pile Extension Reinforcement",
   "unit": "t",
   "rate": 0.75,
   "rateText": null,
   "boq": "",
   "code": "PE-REF",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P24",
   "desc": "Pile Extension Formwork",
   "unit": "m\u00b2",
   "rate": 60,
   "rateText": null,
   "boq": "",
   "code": "PE-FW",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 4,
    "Carpenter": 5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P25",
   "desc": "Pile Extension Concrete",
   "unit": "m\u00b3",
   "rate": 28,
   "rateText": null,
   "boq": "",
   "code": "PE-CON",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 4,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P26",
   "desc": "Pile Extension Curing",
   "unit": "FIXED days",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "PE-CUR",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P27",
   "desc": "Pile Extension FW Removal",
   "unit": "m\u00b2",
   "rate": 55,
   "rateText": null,
   "boq": "",
   "code": "PE-FWR",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P28",
   "desc": "Pile Extension Waterproofing",
   "unit": "m\u00b2",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "PE-WP",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 4
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (2) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P29",
   "desc": "Pile Extension Backfilling",
   "unit": "m\u00b3",
   "rate": 75,
   "rateText": null,
   "boq": "",
   "code": "PE-BF",
   "source": "P2",
   "section": "PE",
   "labour": {
    "Labour": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P30",
   "desc": "Header Beam Scaffolding",
   "unit": "m\u00b3",
   "rate": 75,
   "rateText": null,
   "boq": "",
   "code": "HB-SCF",
   "source": "P2",
   "section": "HB",
   "labour": {
    "Labour": 4,
    "Scaffolder": 3
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P31",
   "desc": "Header Beam Formwork",
   "unit": "m\u00b2",
   "rate": 72,
   "rateText": null,
   "boq": "",
   "code": "HB-FW",
   "source": "P2",
   "section": "HB",
   "labour": {
    "Labour": 4,
    "Carpenter": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P32",
   "desc": "Header Beam Reinforcement",
   "unit": "t",
   "rate": 1.4,
   "rateText": null,
   "boq": "",
   "code": "HB-REF",
   "source": "P2",
   "section": "HB",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P33",
   "desc": "Header Beam Concrete",
   "unit": "m\u00b3",
   "rate": 35,
   "rateText": null,
   "boq": "",
   "code": "HB-CON",
   "source": "P2",
   "section": "HB",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P34",
   "desc": "Header Beam Curing",
   "unit": "FIXED days",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "HB-CUR",
   "source": "P2",
   "section": "HB",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P35",
   "desc": "Header Beam FW Removal",
   "unit": "m\u00b2",
   "rate": 70,
   "rateText": null,
   "boq": "",
   "code": "HB-FWR",
   "source": "P2",
   "section": "HB",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P36",
   "desc": "Deck Scaffolding / Falsework",
   "unit": "m\u00b3",
   "rate": 150,
   "rateText": null,
   "boq": "",
   "code": "DS-SCF",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 6,
    "Scaffolder": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P37",
   "desc": "Bottom Slab Formwork",
   "unit": "m\u00b2",
   "rate": 192,
   "rateText": null,
   "boq": "",
   "code": "DS-FW.B",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Carpenter": 8
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P38",
   "desc": "Bottom Slab + Web Reinforcement",
   "unit": "t",
   "rate": 3.5,
   "rateText": null,
   "boq": "",
   "code": "DS-REF.B",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 10
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P39",
   "desc": "Tendon Duct Installation",
   "unit": "m",
   "rate": 55,
   "rateText": null,
   "boq": "",
   "code": "DS-TDT",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 8,
    "Pipe Fitter": 2
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (6) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P40",
   "desc": "Bottom Slab Concrete",
   "unit": "m\u00b3",
   "rate": 80,
   "rateText": null,
   "boq": "",
   "code": "DS-CON.B",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 6,
    "Mason": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P41",
   "desc": "Kicker Preparation",
   "unit": "LM",
   "rate": 28,
   "rateText": null,
   "boq": "",
   "code": "DS-KR",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Carpenter": 2,
    "Steel Fixer": 1,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P42",
   "desc": "Web Formwork",
   "unit": "m\u00b2",
   "rate": 96,
   "rateText": null,
   "boq": "",
   "code": "DS-FW.W",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Carpenter": 8
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P43",
   "desc": "Web Concrete",
   "unit": "m\u00b3",
   "rate": 45,
   "rateText": null,
   "boq": "",
   "code": "DS-CON.W",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P44",
   "desc": "Web FW Removal",
   "unit": "m\u00b2",
   "rate": 90,
   "rateText": null,
   "boq": "",
   "code": "DS-FWR.W",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P45",
   "desc": "Top Slab Formwork",
   "unit": "m\u00b2",
   "rate": 192,
   "rateText": null,
   "boq": "",
   "code": "DS-FW.T",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Carpenter": 8
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P46",
   "desc": "Top Slab Reinforcement",
   "unit": "t",
   "rate": 3.5,
   "rateText": null,
   "boq": "",
   "code": "DS-REF.T",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 10
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P47",
   "desc": "Top Slab Concrete",
   "unit": "m\u00b3",
   "rate": 65,
   "rateText": null,
   "boq": "",
   "code": "DS-CON.T",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 6,
    "Mason": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P48",
   "desc": "Deck Curing",
   "unit": "FIXED days",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "DS-CUR",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P49",
   "desc": "Formwork Striking",
   "unit": "m\u00b2",
   "rate": 150,
   "rateText": null,
   "boq": "",
   "code": "DS-FWR.S",
   "source": "P2",
   "section": "DS",
   "labour": {
    "Labour": 6,
    "Carpenter": 2,
    "Scaffolder": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P50",
   "desc": "PT Stressing",
   "unit": "tendons",
   "rate": 3,
   "rateText": null,
   "boq": "",
   "code": "PT-STR",
   "source": "P2",
   "section": "PT",
   "labour": {
    "Labour": 6
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (4) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P51",
   "desc": "PT Grouting",
   "unit": "tendons",
   "rate": 6,
   "rateText": null,
   "boq": "",
   "code": "PT-GRT",
   "source": "P2",
   "section": "PT",
   "labour": {
    "Labour": 6
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (4) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P53",
   "desc": "Backwall Reinforcement",
   "unit": "t",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "BW-REF",
   "source": "P2",
   "section": "BW",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P54",
   "desc": "Backwall Formwork",
   "unit": "m\u00b2",
   "rate": 60,
   "rateText": null,
   "boq": "",
   "code": "BW-FW",
   "source": "P2",
   "section": "BW",
   "labour": {
    "Labour": 3,
    "Carpenter": 5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P55",
   "desc": "Backwall Concrete",
   "unit": "m\u00b3",
   "rate": 18,
   "rateText": null,
   "boq": "",
   "code": "BW-CON",
   "source": "P2",
   "section": "BW",
   "labour": {
    "Labour": 4,
    "Mason": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P56",
   "desc": "Backwall FW Removal",
   "unit": "m\u00b2",
   "rate": 55,
   "rateText": null,
   "boq": "",
   "code": "BW-FWR",
   "source": "P2",
   "section": "BW",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P56.a",
   "desc": "Backwall Waterproofing",
   "unit": "m\u00b2",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "BW-WP",
   "source": "P2",
   "section": "BW",
   "labour": {
    "Labour": 4
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (2) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P56.b",
   "desc": "Backwall Curing",
   "unit": "FIXED days",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "BW-CUR",
   "source": "P2",
   "section": "BW",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P57",
   "desc": "Expansion Joint Installation",
   "unit": "m",
   "rate": 4,
   "rateText": null,
   "boq": "",
   "code": "EJ-EXJ",
   "source": "P2",
   "section": "EJ",
   "labour": {
    "Labour": 6,
    "Mason": 2
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (4) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P58.a",
   "desc": "Approach Slab Blinding",
   "unit": "m\u00b2",
   "rate": 25,
   "rateText": null,
   "boq": "",
   "code": "AS-BL",
   "source": "P2",
   "section": "AS",
   "labour": {
    "Labour": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P58",
   "desc": "Approach Slab Reinforcement",
   "unit": "t",
   "rate": 1.4,
   "rateText": null,
   "boq": "",
   "code": "AS-REF",
   "source": "P2",
   "section": "AS",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P59",
   "desc": "Approach Slab Formwork",
   "unit": "m\u00b2",
   "rate": 120,
   "rateText": null,
   "boq": "",
   "code": "AS-FW",
   "source": "P2",
   "section": "AS",
   "labour": {
    "Labour": 3,
    "Carpenter": 5
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P60",
   "desc": "Approach Slab Concrete",
   "unit": "m\u00b3",
   "rate": 45,
   "rateText": null,
   "boq": "",
   "code": "AS-CON",
   "source": "P2",
   "section": "AS",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P61",
   "desc": "Approach Slab FW Removal",
   "unit": "m\u00b2",
   "rate": 70,
   "rateText": null,
   "boq": "",
   "code": "AS-FWR",
   "source": "P2",
   "section": "AS",
   "labour": {
    "Labour": 4,
    "Carpenter": 1
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P62",
   "desc": "Installation of Gantry",
   "unit": "nr",
   "rate": 70,
   "rateText": null,
   "boq": "",
   "code": "GAN",
   "source": "P2",
   "section": "Gan",
   "labour": {
    "Labour": 8
   },
   "equipment": {
    "Crane": 1.0
   },
   "flags": [
    "Skilled Labour (4) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P63",
   "desc": "Finishing Works",
   "unit": "",
   "rate": 10,
   "rateText": null,
   "boq": "",
   "code": "BR-FW",
   "source": "P2",
   "section": "FW",
   "labour": {
    "Labour": 4,
    "Carpenter": 4,
    "Steel Fixer": 4,
    "Mason": 4
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P64",
   "desc": "Foundation / Levelling Pad",
   "unit": "m",
   "rate": 30.0,
   "rateText": null,
   "boq": "",
   "code": "MSE-FND",
   "source": "P2",
   "section": "MSE",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": []
  },
  {
   "ref": "P66",
   "desc": "Strip Laying (all lifts)",
   "unit": "strips",
   "rate": 96.0,
   "rateText": null,
   "boq": "",
   "code": "MSE-STRP",
   "source": "P2",
   "section": "MSE",
   "labour": {
    "Labour": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P67",
   "desc": "Select Backfill Place & Compact",
   "unit": "m3",
   "rate": 350,
   "rateText": null,
   "boq": "",
   "code": "MSE-BF",
   "source": "P2",
   "section": "MSE",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Shovel": 1.0,
    "Roller": 1.0,
    "Baby Roller": 2.0,
    "Plate Compactor": 2.0,
    "Water Tanker": 0.25
   },
   "flags": []
  },
  {
   "ref": "P68",
   "desc": "Coping Beam / Capping",
   "unit": "m",
   "rate": 15.0,
   "rateText": null,
   "boq": "",
   "code": "MSE-COP",
   "source": "P2",
   "section": "MSE",
   "labour": {
    "Labour": 4,
    "Carpenter": 2,
    "Steel Fixer": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P69",
   "desc": "Formation Preparation",
   "unit": "",
   "rate": 1000,
   "rateText": null,
   "boq": "",
   "code": "CUL-FP",
   "source": "P2",
   "section": "BASE SLAB",
   "labour": {
    "Labour": 3
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P70",
   "desc": "Blinding Concrete",
   "unit": "",
   "rate": 600,
   "rateText": null,
   "boq": "",
   "code": "CUL-BL",
   "source": "P2",
   "section": "BASE SLAB",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P71",
   "desc": "2-ply waterproofing membrane (Bottom slab)",
   "unit": "",
   "rate": 200,
   "rateText": null,
   "boq": "",
   "code": "CUL-WPM",
   "source": "P2",
   "section": "BASE SLAB",
   "labour": {
    "Labour": 6,
    "Mason": 3
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P72",
   "desc": "50mm screed on bottom slab",
   "unit": "",
   "rate": 600,
   "rateText": null,
   "boq": "",
   "code": "CUL-SCR",
   "source": "P2",
   "section": "BASE SLAB",
   "labour": {
    "Labour": 3
   },
   "equipment": {
    "Shovel": 1.0
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P73",
   "desc": "Steel fixing-Bottom slab",
   "unit": "tonn",
   "rate": 2,
   "rateText": null,
   "boq": "",
   "code": "CUL-SF-BS",
   "source": "P2",
   "section": "BASE SLAB",
   "labour": {
    "Labour": 3,
    "Steel Fixer": 5
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": []
  },
  {
   "ref": "P74",
   "desc": "Formwork-Bottom slab",
   "unit": "m2",
   "rate": 75,
   "rateText": null,
   "boq": "",
   "code": "CUL-FW-BS",
   "source": "P2",
   "section": "BASE SLAB",
   "labour": {
    "Labour": 2,
    "Carpenter": 5
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": []
  },
  {
   "ref": "P75",
   "desc": "Concrete-Bottom slab",
   "unit": "m3",
   "rate": 750,
   "rateText": null,
   "boq": "",
   "code": "CUL-CON-BS",
   "source": "P2",
   "section": "BASE SLAB",
   "labour": {
    "Labour": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P76",
   "desc": "Wall Steel fixing",
   "unit": "",
   "rate": 2.8,
   "rateText": null,
   "boq": "",
   "code": "CUL-SF-W",
   "source": "P2",
   "section": "WALL",
   "labour": {
    "Labour": 3,
    "Steel Fixer": 7
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P77",
   "desc": "Wall form work",
   "unit": "",
   "rate": 40,
   "rateText": null,
   "boq": "",
   "code": "CUL-FW-W",
   "source": "P2",
   "section": "WALL",
   "labour": {
    "Labour": 2,
    "Carpenter": 5
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P78",
   "desc": "Wall Concrete",
   "unit": "m3",
   "rate": 750,
   "rateText": null,
   "boq": "",
   "code": "CUL-CON-W",
   "source": "P2",
   "section": "WALL",
   "labour": {
    "Labour": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P79",
   "desc": "Wall Formwork removal",
   "unit": "",
   "rate": 80,
   "rateText": null,
   "boq": "",
   "code": "CUL-FWR-W",
   "source": "P2",
   "section": "WALL",
   "labour": {
    "Labour": 1,
    "Carpenter": 1
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P80",
   "desc": "Waterproofing wall out side",
   "unit": "",
   "rate": 200,
   "rateText": null,
   "boq": "",
   "code": "CUL-WP-W",
   "source": "P2",
   "section": "WALL",
   "labour": {
    "Labour": 6,
    "Mason": 3
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P81",
   "desc": "Filling around out side wall",
   "unit": "",
   "rate": 150,
   "rateText": null,
   "boq": "",
   "code": "CUL-FILL-W",
   "source": "P2",
   "section": "WALL",
   "labour": {
    "Labour": 3
   },
   "equipment": {
    "Baby Roller": 1.0,
    "Water Tanker": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P82",
   "desc": "Scaffolding for top slab",
   "unit": "",
   "rate": 45,
   "rateText": null,
   "boq": "",
   "code": "CUL-SCF-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 1,
    "Carpenter": 1,
    "Scaffolder": 1
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P83",
   "desc": "Formwork for top slab",
   "unit": "",
   "rate": 45,
   "rateText": null,
   "boq": "",
   "code": "CUL-FW-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 2,
    "Carpenter": 2,
    "Scaffolder": 2
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P84",
   "desc": "Steel fixing for top slab",
   "unit": "",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "CUL-SF-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 2,
    "Steel Fixer": 5
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P85",
   "desc": "Concrete-Top slab",
   "unit": "",
   "rate": 500,
   "rateText": null,
   "boq": "",
   "code": "CUL-CON-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 2,
    "Mason": 2
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P86",
   "desc": "Removal of formwork & scaffolding",
   "unit": "",
   "rate": 150,
   "rateText": null,
   "boq": "",
   "code": "CUL-FWR-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 1,
    "Carpenter": 1
   },
   "equipment": {
    "Crane": 0.25
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P87",
   "desc": "Curing",
   "unit": "",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "CUL-CUR-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 1
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P88",
   "desc": "Waterpoofing above top slab",
   "unit": "",
   "rate": 200,
   "rateText": null,
   "boq": "",
   "code": "CUL-WP-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 6,
    "Mason": 3
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P89",
   "desc": "MSE wall & filling above top slab",
   "unit": "",
   "rate": 500,
   "rateText": null,
   "boq": "",
   "code": "CUL-MSE-TS",
   "source": "P2",
   "section": "TOP SLAB",
   "labour": {
    "Labour": 2
   },
   "equipment": {
    "Shovel": 0.5
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P90",
   "desc": "Blinding Concrete",
   "unit": "",
   "rate": 600,
   "rateText": null,
   "boq": "",
   "code": "CUL-BL-AS",
   "source": "P2",
   "section": "APP SLAB",
   "labour": {
    "Labour": 4,
    "Mason": 2
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P91",
   "desc": "Mass Concrete-bass slab",
   "unit": "",
   "rate": 600,
   "rateText": null,
   "boq": "",
   "code": "CUL-MC",
   "source": "P2",
   "section": "Finishing Works",
   "labour": {
    "Labour": 2,
    "Mason": 2
   },
   "equipment": {
    "Shovel": 0.5,
    "Water Tanker": 0.2
   },
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P92",
   "desc": "Kerbstone-Inside culvert",
   "unit": "",
   "rate": 75,
   "rateText": null,
   "boq": "",
   "code": "CUL-KB",
   "source": "P2",
   "section": "Finishing Works",
   "labour": {
    "Labour": 2,
    "Carpenter": 1,
    "Mason": 1
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P93",
   "desc": "Side walk-inside culvert",
   "unit": "",
   "rate": 250,
   "rateText": null,
   "boq": "",
   "code": "CUL-SW",
   "source": "P2",
   "section": "Finishing Works",
   "labour": {
    "Labour": 4,
    "Carpenter": 1,
    "Mason": 2
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P94",
   "desc": "Finishing layer",
   "unit": "",
   "rate": 100,
   "rateText": null,
   "boq": "",
   "code": "CUL-FL",
   "source": "P2",
   "section": "Finishing Works",
   "labour": {
    "Labour": 2
   },
   "equipment": {},
   "flags": [
    "Unit missing in source \u2014 GAP, confirm"
   ]
  },
  {
   "ref": "P106",
   "desc": "Survey & Setting Out",
   "unit": "m",
   "rate": 100,
   "rateText": null,
   "boq": "",
   "code": "SSO",
   "source": "P2",
   "section": "Survey",
   "labour": {
    "Labour": 3
   },
   "equipment": {},
   "flags": [
    "Skilled Labour (1) merged into Labour per instruction 02-Jul-26"
   ]
  },
  {
   "ref": "P107",
   "desc": "Test Piling",
   "unit": "pile",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "TP",
   "source": "P2",
   "section": "Pile",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Piling Rig": 1.0
   },
   "flags": []
  },
  {
   "ref": "P108",
   "desc": "Precast MSE Panel Erection",
   "unit": "panels",
   "rate": 15,
   "rateText": null,
   "boq": "",
   "code": "PRC-MSE",
   "source": "P2",
   "section": "Precast",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Crane": 1.0
   },
   "flags": [
    "GOVERNS MSE panel erection: 15 panels/day per Nandakumar 02-Jul-26. P65 MSE-PAN 24/day and P1 20 m2/day superseded \u2014 see Conflict Register"
   ]
  },
  {
   "ref": "P116",
   "desc": "Road Crossing Duct - Storm Water",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "RCD-SW",
   "source": "P2",
   "section": "RCD",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Excavator": 0.25,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "P119",
   "desc": "Road Crossing Duct - Natural Gas",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "RCD-GAS",
   "source": "P2",
   "section": "RCD",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Excavator": 0.25,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "P120",
   "desc": "Road Crossing Duct - Etisalat",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "RCD-ETI",
   "source": "P2",
   "section": "RCD",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Excavator": 0.25,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "P121",
   "desc": "Road Crossing Duct - Du/Fibre/SEWA/Sewer",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "RCD-DU",
   "source": "P2",
   "section": "RCD",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Excavator": 0.25,
    "Baby Roller": 0.25
   },
   "flags": []
  },
  {
   "ref": "P139",
   "desc": "Potable Water - Excavation & Laying",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "",
   "code": "UT-PW-EXC",
   "source": "P2",
   "section": "Potable Water",
   "labour": {
    "Labour": 6,
    "Pipe Fitter": 1
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P140",
   "desc": "Potable Water - Shutdown & Connection",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-PW-CON",
   "source": "P2",
   "section": "Potable Water",
   "labour": {
    "Labour": 4,
    "Pipe Fitter": 2
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P141",
   "desc": "Potable Water - Removal of Existing",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-PW-REM",
   "source": "P2",
   "section": "Potable Water",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P142",
   "desc": "Potable Water - Backfilling",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-PW-BF",
   "source": "P2",
   "section": "Potable Water",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Shovel": 0.5,
    "Baby Roller": 0.5,
    "Water Tanker": 0.25
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P143",
   "desc": "Potable Water - Protection Slab",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-PW-PS",
   "source": "P2",
   "section": "Potable Water",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 1
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P146",
   "desc": "Etisalat - Excavation & Duct Laying",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "",
   "code": "UT-ETI-EXC",
   "source": "P2",
   "section": "Etisalat",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P147",
   "desc": "Etisalat - Cable Laying & Connection",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-ETI-CL",
   "source": "P2",
   "section": "Etisalat",
   "labour": {
    "Labour": 4,
    "Electrician": 1
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P148",
   "desc": "Etisalat - Removal of Existing",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-ETI-REM",
   "source": "P2",
   "section": "Etisalat",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P149",
   "desc": "Etisalat - Backfilling",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-ETI-BF",
   "source": "P2",
   "section": "Etisalat",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Shovel": 0.5,
    "Baby Roller": 0.5,
    "Water Tanker": 0.25
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P150",
   "desc": "Etisalat - Protection Slab",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-ETI-PS",
   "source": "P2",
   "section": "Etisalat",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 1
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P152",
   "desc": "Natural Gas - Excavation & Laying",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "",
   "code": "UT-GAS-EXC",
   "source": "P2",
   "section": "Natural Gas",
   "labour": {
    "Labour": 4,
    "Pipe Fitter": 1
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P153",
   "desc": "Natural Gas - Shutdown & Connection",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-GAS-CON",
   "source": "P2",
   "section": "Natural Gas",
   "labour": {
    "Labour": 4,
    "Pipe Fitter": 2
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P154",
   "desc": "Natural Gas - Removal of Existing",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-GAS-REM",
   "source": "P2",
   "section": "Natural Gas",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P155",
   "desc": "Natural Gas - Backfilling",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-GAS-BF",
   "source": "P2",
   "section": "Natural Gas",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Shovel": 0.5,
    "Baby Roller": 0.5,
    "Water Tanker": 0.25
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P156",
   "desc": "Natural Gas - Protection Slab",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-GAS-PS",
   "source": "P2",
   "section": "Natural Gas",
   "labour": {
    "Labour": 4,
    "Steel Fixer": 1
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P157",
   "desc": "Natural Gas - Culvert Construction",
   "unit": "m",
   "rate": 5,
   "rateText": null,
   "boq": "",
   "code": "UT-GAS-CUL",
   "source": "P2",
   "section": "Natural Gas",
   "labour": {
    "Labour": 6,
    "Carpenter": 2,
    "Steel Fixer": 2
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P159",
   "desc": "TSE - Diversions",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "",
   "code": "UT-TSE",
   "source": "P2",
   "section": "TSE",
   "labour": {
    "Labour": 4,
    "Pipe Fitter": 1
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P160",
   "desc": "Irrigation - Removal/Relocation",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-IRR",
   "source": "P2",
   "section": "Irrigation",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Excavator": 0.5
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P161",
   "desc": "Storm Water Relocation - Excavation & Laying",
   "unit": "m",
   "rate": 20,
   "rateText": null,
   "boq": "",
   "code": "UT-SW-EXC",
   "source": "P2",
   "section": "Storm Water",
   "labour": {
    "Labour": 6,
    "Pipe Fitter": 1
   },
   "equipment": {
    "Excavator": 0.5
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P162",
   "desc": "Storm Water Relocation - Shutdown & Connection",
   "unit": "nr",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-SW-CON",
   "source": "P2",
   "section": "Storm Water",
   "labour": {
    "Labour": 4,
    "Pipe Fitter": 2
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P163",
   "desc": "Storm Water Relocation - Removal",
   "unit": "m",
   "rate": 30,
   "rateText": null,
   "boq": "",
   "code": "UT-SW-REM",
   "source": "P2",
   "section": "Storm Water",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Excavator": 0.5
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P164",
   "desc": "Storm Water Relocation - Backfilling",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "UT-SW-BF",
   "source": "P2",
   "section": "Storm Water",
   "labour": {
    "Labour": 4
   },
   "equipment": {
    "Shovel": 0.5,
    "Baby Roller": 0.5,
    "Water Tanker": 0.25
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P166",
   "desc": "SEWA 132KV HV Cable - Protection",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-HV",
   "source": "P2",
   "section": "Electrical",
   "labour": {
    "Labour": 6,
    "Electrician": 2
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P167",
   "desc": "SEWA LV Cable - Diversion",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-LV",
   "source": "P2",
   "section": "Electrical",
   "labour": {
    "Labour": 4,
    "Electrician": 1
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P168",
   "desc": "Fibre-Optic Cable - Protection",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-FOC",
   "source": "P2",
   "section": "Telecom",
   "labour": {
    "Labour": 4,
    "Electrician": 1
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P169",
   "desc": "Du Telecom - Protection",
   "unit": "nr",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-DU",
   "source": "P2",
   "section": "Telecom",
   "labour": {
    "Labour": 4,
    "Electrician": 1
   },
   "equipment": {
    "Excavator": 1.0
   },
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P170",
   "desc": "Traffic Diversion - Setup",
   "unit": "ls",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "TD",
   "source": "P2",
   "section": "General",
   "labour": {
    "Labour": 6
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P176",
   "desc": "Utility Protection",
   "unit": "ls",
   "rate": 1,
   "rateText": null,
   "boq": "",
   "code": "UT-PROT",
   "source": "P2",
   "section": "General",
   "labour": {
    "Labour": 4
   },
   "equipment": {},
   "flags": [
    "Relocation/protection of existing services \u2014 distinct from P1 new-works rates (confirmed 02-Jul-26)"
   ]
  },
  {
   "ref": "P177",
   "desc": "Road Works - Traffic Diversion",
   "unit": "m\u00b2",
   "rate": 1000,
   "rateText": null,
   "boq": "",
   "code": "RW-TD",
   "source": "P2",
   "section": "Road Works",
   "labour": {
    "Labour": 4
   },
   "equipment": {},
   "flags": []
  },
  {
   "ref": "P178",
   "desc": "Guardrail / Crash Barrier Installation",
   "unit": "m",
   "rate": 50,
   "rateText": null,
   "boq": "",
   "code": "RW-GR",
   "source": "P2",
   "section": "Road Works",
   "labour": {
    "Labour": 6
   },
   "equipment": {
    "Crane": 1.0
   },
   "flags": []
  }
 ],
 "bgUpMapping": [
  {
   "boq": "BG",
   "code": "GI",
   "name": "Geotechnical Investigation & report",
   "mapTo": "BH (GI)",
   "status": "DRAFT",
   "note": "P1 boreholes 5 nr/day"
  },
  {
   "boq": "BG",
   "code": "BH",
   "name": "Geotechnical Investigation & report",
   "mapTo": "BH (GI)",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "BG",
   "code": "GC",
   "name": "General Clearance",
   "mapTo": "DMSC (D&S)",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "BG",
   "code": "PI",
   "name": "Test Pile & Testing",
   "mapTo": "TP",
   "status": "DRAFT",
   "note": "P2 test piling 1 pile/day"
  },
  {
   "boq": "BG",
   "code": "PIP",
   "name": "Pile head preparation",
   "mapTo": "PL-PLC",
   "status": "DRAFT",
   "note": "Pile cutting & preparation 5 piles/day"
  },
  {
   "boq": "BG",
   "code": "PIE",
   "name": "Pile Extension",
   "mapTo": "PE-SCF, PE-REF, PE-FW, PE-CON, PE-CUR, PE-FWR, PE-WP, PE-BF",
   "status": "DRAFT",
   "note": "Group \u2014 split per sub-activity or apply dominant rate"
  },
  {
   "boq": "BG",
   "code": "HB",
   "name": "Header Beam",
   "mapTo": "HB-SCF, HB-FW, HB-REF, HB-CON, HB-CUR, HB-FWR",
   "status": "DRAFT",
   "note": "Group"
  },
  {
   "boq": "BG",
   "code": "PC",
   "name": "Pile Cap Works",
   "mapTo": "PC-BL, PC-REF, PC-FW, PC-CON, PC-CUR, PC-FWR, PC-WP, PC-BF",
   "status": "DRAFT",
   "note": "Group"
  },
  {
   "boq": "BG",
   "code": "PCW",
   "name": "Pier Column Works",
   "mapTo": "PR-SCF, PR-REF, PR-FW, PR-CON, PR-FWR",
   "status": "DRAFT",
   "note": "Group"
  },
  {
   "boq": "BG",
   "code": "PCH",
   "name": "Pier Head Works",
   "mapTo": "PH-REF, PH-FW, PH-CON, PH-FWR",
   "status": "DRAFT",
   "note": "Group"
  },
  {
   "boq": "BG",
   "code": "BRG",
   "name": "Fixing Bearing",
   "mapTo": "BE-BER",
   "status": "DRAFT",
   "note": "4 bearings/day"
  },
  {
   "boq": "BG",
   "code": "BSW",
   "name": "Bottom Slab & Webs steel + PT cables",
   "mapTo": "DS-REF.B, DS-TDT",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "BG",
   "code": "DSS",
   "name": "Deck Slab Formwork & Scaffolding",
   "mapTo": "DS-SCF, DS-FW.B",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "BG",
   "code": "TS",
   "name": "Top Slab steel & concrete",
   "mapTo": "DS-FW.T, DS-REF.T, DS-CON.T",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "BG",
   "code": "BW",
   "name": "Backwall",
   "mapTo": "BW-REF, BW-FW, BW-CON, BW-FWR, BW-WP, BW-CUR",
   "status": "DRAFT",
   "note": "Group"
  },
  {
   "boq": "BG",
   "code": "STRE",
   "name": "Stressing",
   "mapTo": "PT-STR, PT-GRT",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "BG",
   "code": "FEJ",
   "name": "Fixing of Expansion Joint",
   "mapTo": "EJ-EXJ",
   "status": "DRAFT",
   "note": "4 m/day"
  },
  {
   "boq": "BG",
   "code": "ASS",
   "name": "Approach Slab",
   "mapTo": "AS-BL, AS-REF, AS-FW, AS-CON, AS-FWR",
   "status": "DRAFT",
   "note": "Group"
  },
  {
   "boq": "BG",
   "code": "MSE",
   "name": "MSE Wall & Ramp",
   "mapTo": "MSE-FND, PRC-MSE, MSE-STRP, MSE-BF, MSE-COP",
   "status": "DRAFT",
   "note": "Panel erection = PRC-MSE 15 panels/day per Nandakumar 02-Jul-26"
  },
  {
   "boq": "BG",
   "code": "FH",
   "name": "Finishing works for Bridge",
   "mapTo": "BR-FW",
   "status": "DRAFT",
   "note": "P63 finishing 10/day (unit missing in source)"
  },
  {
   "boq": "BG",
   "code": "CBB",
   "name": "Bridge Concrete Barrier",
   "mapTo": "\u2014",
   "status": "GAP",
   "note": "No rate in either sheet \u2014 provide rate"
  },
  {
   "boq": "BG",
   "code": "FW-MSE",
   "name": "Formwork preparation for MSE panel",
   "mapTo": "\u2014",
   "status": "GAP",
   "note": "No casting-yard rate for MSE panels \u2014 provide rate"
  },
  {
   "boq": "BG",
   "code": "PC-MSE",
   "name": "Pre-Casting of MSE wall panels",
   "mapTo": "\u2014",
   "status": "GAP",
   "note": "Only erection rates exist (P65/P108) \u2014 provide casting rate"
  },
  {
   "boq": "UP",
   "code": "S",
   "name": "Shoring Works",
   "mapTo": "SH-PIT (PIT)",
   "status": "DRAFT",
   "note": "P1 box shoring 0.25 pit/day \u2014 basis differs (pit vs m), confirm"
  },
  {
   "boq": "UP",
   "code": "DEW",
   "name": "Dewatering",
   "mapTo": "DE-W (PIT)",
   "status": "DRAFT",
   "note": "0.14 pit/day \u2014 confirm basis"
  },
  {
   "boq": "UP",
   "code": "EX",
   "name": "Excavation for Underpass",
   "mapTo": "EX-PIT (PIT)",
   "status": "DRAFT",
   "note": "300 m3/day"
  },
  {
   "boq": "UP",
   "code": "GFL",
   "name": "Ground formation levelling",
   "mapTo": "CUL-FP",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "BC",
   "name": "Blinding & curing",
   "mapTo": "CUL-BL",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "WP",
   "name": "Waterproofing",
   "mapTo": "CUL-WPM",
   "status": "DRAFT",
   "note": "Bottom-slab membrane rate; walls = CUL-WP-W \u2014 confirm which"
  },
  {
   "boq": "UP",
   "code": "SC",
   "name": "Screed & curing",
   "mapTo": "CUL-SCR",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "BSR",
   "name": "Bottom slab reinforcement",
   "mapTo": "CUL-SF-BS",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "BSF",
   "name": "Bottom slab formwork",
   "mapTo": "CUL-FW-BS",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "BSC",
   "name": "Bottom slab concrete & curing",
   "mapTo": "CUL-CON-BS",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "FWR",
   "name": "Formwork removal (bottom slab)",
   "mapTo": "CUL-FWR-W",
   "status": "DRAFT",
   "note": "No bottom-slab FWR rate in P2; wall FWR used \u2014 confirm"
  },
  {
   "boq": "UP",
   "code": "ST",
   "name": "Access scaffolding & wall reinforcement",
   "mapTo": "CUL-SF-W",
   "status": "DRAFT",
   "note": "Scaffolding element has no separate wall rate \u2014 confirm"
  },
  {
   "boq": "UP",
   "code": "SH",
   "name": "Shuttering (walls)",
   "mapTo": "CUL-FW-W",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "CC",
   "name": "Concrete casting (walls)",
   "mapTo": "CUL-CON-W",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "CU",
   "name": "Curing",
   "mapTo": "CUL-CUR-TS",
   "status": "DRAFT",
   "note": "P2 curing = 1 fixed day"
  },
  {
   "boq": "UP",
   "code": "DSH",
   "name": "De-shuttering",
   "mapTo": "CUL-FWR-W",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "SFF",
   "name": "Scaffolding & formwork (top slab)",
   "mapTo": "CUL-SCF-TS, CUL-FW-TS",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "SFDM",
   "name": "Scaffolding & formwork dismantling",
   "mapTo": "CUL-FWR-TS",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "BF.UP",
   "name": "Backfilling side of wall",
   "mapTo": "CUL-FILL-W",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "MC",
   "name": "Mass concrete",
   "mapTo": "CUL-MC",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "C-SW",
   "name": "Construction of side walk",
   "mapTo": "CUL-SW",
   "status": "DRAFT",
   "note": ""
  },
  {
   "boq": "UP",
   "code": "CB",
   "name": "Concrete Barrier",
   "mapTo": "\u2014",
   "status": "GAP",
   "note": "No rate \u2014 provide"
  },
  {
   "boq": "UP",
   "code": "DTT",
   "name": "Decorative tiles",
   "mapTo": "\u2014",
   "status": "GAP",
   "note": "No rate \u2014 provide"
  },
  {
   "boq": "UP",
   "code": "ASC",
   "name": "Approach slab casting",
   "mapTo": "AS-CON",
   "status": "DRAFT",
   "note": "Bridge approach-slab concrete rate \u2014 confirm"
  },
  {
   "boq": "UP",
   "code": "PC",
   "name": "Prime coat",
   "mapTo": "PC (RW)",
   "status": "DRAFT",
   "note": "P1 road works rate"
  },
  {
   "boq": "UP",
   "code": "WC",
   "name": "Wearing course",
   "mapTo": "WC (RW)",
   "status": "DRAFT",
   "note": "P1 road works rate"
  },
  {
   "boq": "RW",
   "code": "TI",
   "name": "Interlock tiles",
   "mapTo": "IL.60 (RW)",
   "status": "DRAFT",
   "note": "Confirm 60mm vs 80mm; IL.80 unit corrected to m2 (confirmed 02-Jul-26)"
  },
  {
   "boq": "RW",
   "code": "CMT",
   "name": "(unidentified)",
   "mapTo": "\u2014",
   "status": "GAP",
   "note": "Code not found in either sheet \u2014 clarify"
  },
  {
   "boq": "FF",
   "code": "SD&C",
   "name": "Shut down & connection",
   "mapTo": "\u2014",
   "status": "GAP",
   "note": "No FF shutdown rate \u2014 provide or map to a UT-*-CON rate"
  },
  {
   "boq": "ELE",
   "code": "SSF",
   "name": "Substation foundation",
   "mapTo": "SSF (ELE)",
   "status": "DRAFT",
   "note": "P1 code was #REF!; assigned SSF"
  }
 ]
};
