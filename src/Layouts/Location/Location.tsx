import { useEffect, useState } from "react";
import { TrustPageOptionsQuoteButton } from "../Trust/styled"
import { StyledFLocationPageTitle, StyledLocationCell, StyledLocationPage, StyledLocationPageBottom, StyledLocationPageMapBlock, StyledLocationPageTop, StyledLocationsList } from "./styled"
import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog";

export const LocationPage: React.FC = () => {
    const [defaultCenter, setDefaultCenter] = useState({ lat: 43.751070, lng: -79.447015 })
    const [defaultZoom, setDefaultZoom] = useState(10)

    const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const [selectedAreaId, setSelectedAreaId] = useState(1);

    const placesList = [
        {
            id: 1,
            name: 'Greater Toronto Area',
            coord: { lat: 43.718070, lng: -79.447015 },
            zoom: 10
        },
        {
            id: 2,
            name: 'Vancouver',
            coord: { lat: 49.246292, lng: -123.116226 },
            zoom: 10
        },
        {
            id: 3,
            name: 'Montreal',
            coord: { lat: 45.508888, lng: -73.561668 },
            zoom: 10
        },
        {
            id: 4,
            name: 'Ottawa',
            coord: { lat: 45.424721, lng: -75.695000 },
            zoom: 11
        },
        {
            id: 5,
            name: 'Niagara Area',
            coord: { lat: 43.120001, lng: -79.206667 },
            zoom: 10.5
        },
        {
            id: 6,
            name: 'Hamilton Area',
            coord: { lat: 43.255203, lng: -79.843826 },
            zoom: 10
        },
        {
            id: 7,
            name: 'Kitchener Area',
            coord: { lat: 43.452969, lng: -80.495064 },
            zoom: 10
        },
        {
            id: 8,
            name: 'Durham Area',
            coord: { lat: 43.9, lng: -78.95 },
            zoom: 10
        },
        {
            id: 9,
            name: 'London Area',
            coord: { lat: 42.983612, lng: -81.249725 },
            zoom: 10
        },
    ]

    useEffect(() => { }, [setDefaultCenter, setDefaultZoom])

    return (
        <StyledLocationPage>
            <StyledLocationPageTop>
                <StyledFLocationPageTitle>
                    Areas we serve
                </StyledFLocationPageTitle>

                <TrustPageOptionsQuoteButton
                    onClick={() => setOpenQuoteDialog(true)}
                >
                    Get a quote
                </TrustPageOptionsQuoteButton>
            </StyledLocationPageTop>

            <StyledLocationPageBottom>
                <StyledLocationsList>
                    {placesList.map((item: any) => (
                        <StyledLocationCell
                            key={item.id}
                            sx={{
                                borderColor: item.id === selectedAreaId ? '#00302E' : '#fff'
                            }}
                            onClick={() => {
                                setSelectedAreaId(item.id)
                                // setDefaultZoom(item.zoom)
                                // setDefaultCenter(item.coord)
                            }}
                        >
                            {item.name}
                        </StyledLocationCell>
                    ))}
                </StyledLocationsList>

                <StyledLocationPageMapBlock>
                    {selectedAreaId === 1 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 2 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 3 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 4 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 5 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 6 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 7 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 8 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}

                    {selectedAreaId === 9 && (
                        <Map
                            defaultZoom={placesList[selectedAreaId - 1].zoom}
                            defaultCenter={placesList[selectedAreaId - 1].coord}
                        >
                        </Map>
                    )}
                </StyledLocationPageMapBlock>
            </StyledLocationPageBottom>
        </StyledLocationPage>
    )
}