/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";

import { Aggregation, Facet } from "../../types/search";

import { formatSearchText } from "../../utility/search";

import "./facet-sidebar.scss";

interface IFacetSidebarProps {
	facets: Aggregation[];
	onFacetClick: (facets: Facet[]) => void;
}

export const FacetSidebar = ({ facets, onFacetClick }: IFacetSidebarProps) => {
	const [activeFacets, setActiveFacets] = useState<Facet[]>([]);

	useEffect(() => {
		onFacetClick(activeFacets);
	}, [activeFacets]);

	const isChecked = (field: string, value: string): boolean => {
		for (const facet of activeFacets) {
			if (facet.field === field && facet.value === value) return true;
		}

		return false;
	};

	const handleFacetClick = (e: React.BaseSyntheticEvent): void => {
		const field = e.target.getAttribute("data-field");
		const value = e.target.getAttribute("data-value");

		setActiveFacets((prevState) => {
			const newFacets = [];
			let foundFacet = false;
			for (const facet of prevState) {
				if (facet.field === field && facet.value === value) {
					foundFacet = true;
					continue;
				}

				newFacets.push(facet);
			}

			if (!foundFacet) newFacets.push({ field, value });

			return newFacets;
		});
	};

	const handleFacetClear = (facet: Facet) => {
		const facets = activeFacets;

		setActiveFacets(facets.filter((x) => x.field !== facet.field));
	};

	return (
		<div className="facet-sidebar">
			<h5>Filters</h5>
			<div className="active-facets">
				{activeFacets.map((x) => (
					<div key={x.value.toString()} className="active-facet">
						<span className="text">{`${x.field}: ${x.value}`}</span>
						<CloseButton
							className="close-button"
							onClick={() => handleFacetClear(x)}
						/>
					</div>
				))}
			</div>
			<Accordion>
				{facets.map((x, index) => {
					return (
						<Accordion.Item
							key={`${x.name}`}
							eventKey={index.toString()}
						>
							<Accordion.Header className="facet-header">
								{x.name}
							</Accordion.Header>
							<Accordion.Body>
								{x.buckets.map((i) => {
									return (
										<Form.Check
											key={i.key}
											type="checkbox"
											id={i.key}
											label={`${formatSearchText(
												i.key,
												x,
											)} (${i.count})`}
											data-field={x.name}
											data-value={i.key}
											checked={isChecked(x.name, i.key)}
											onClick={handleFacetClick}
										/>
									);
								})}
							</Accordion.Body>
						</Accordion.Item>
					);
				})}
			</Accordion>
		</div>
	);
};
