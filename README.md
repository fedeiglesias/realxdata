![RealXData](./logo.gif)

𝗥𝗘𝗔𝗟𝗫𝗗𝗔𝗧𝗔 is a technology company founded by Dr. Titus Albrecht, Daniel Sprünker and Stefan Nusche in 2016 with offices in Berlin and Barcelona.

The team is composed by talented creators whose diverse backgrounds enable realxdata to digitize the real estate industry. Their goal is to make the commercial real estate asset class transparent and globally accessible for every investor by building the leading data driven analysis solution. Doing so realxdata integrates proprietary data, utilises crowdsourced data and structures valuable public data.

You can read more in [𝗥𝗘𝗔𝗟𝗫𝗗𝗔𝗧𝗔](https://www.realxdata.com/)

## What about this project?

This project is a Job Challenge :man_technologist:!

Forked from [this repo](https://github.com/Yog9/SnapShot).

###   :medal_military: Objetives
- [x] Convert HashRoutes to Frendly URLs.  
- [x] Clear Search field when category is clicked.  
- [x] Add Request cache to avoid repeated API calls.  
- [x] Geolocate pictures using Google Maps API. You can use one of the next variants:


- 🥈 When pic is clicked, a modal shows with the map and the information of the photo.
	- :+1: **PROS:** Besides showing the location, we can show full details of the item.
	- :-1: **CONS:** We dont have other photo locations in the same map to see and compare.

- 🥇 Add a map on the header with markers, on mouse over the marker the corresponding pic get selected (and vice versa)
	- :+1: **PROS:** Is the only alternative where we can see and compare locations of all photos in the same map.
	- :-1: **CONS:** It will nice to have some way to show detail information about each photo, maybe display a modal like the first aproach.
	- :trophy: This is, in my opinion, the best aproach!
	- :star2: **BONUS:** Search by Geolocation Feature added!! Drag and zoom over Map will search in the current focused location.

- 🥉 OnMouseOver a photo, a tooltip appears the map and the area where the photo is located.
	- :+1: **PROS:** Is the only alternative where we can see and compare locations of all photos in the same map.
	- :-1: **CONS:** We dont have other photo locations in the same map to see and compare.


### :bulb: Some good ideas to improve
- Code Unit tests (React testing Library)
- Code Integration tests (Cypres)
- Configure pre-push hook to run linter, test and other task (Husky) 
- Define a Style guide
- Create Components Catalog/Docs (Storybook)
- Setup Prettier to the project
