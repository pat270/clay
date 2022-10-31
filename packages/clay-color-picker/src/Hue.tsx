/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import ClaySlider from '@clayui/slider';
import React, {useState} from 'react';

type Props = {
	/**
	 * Callback function for when the hue value changes
	 */
	onChange: (hue: number) => void;

	/**
	 * The value of the Hue of the color
	 */
	value: number;
};

/**
 * Renders Hue component
 */
const ClayColorPickerHue = ({value = 0, onChange = () => {}}: Props) => {
	const [internalValue, setInternalValue] = useState<number>(value);

	const handleOnChangeEnd = (event: any) => {
		onChange(internalValue);

		event.target.blur();

		event.target.focus();
	};

	React.useEffect(() => {
		setInternalValue(value);
	}, [value]);

	return (
		<div className="clay-color-form-group">
			<ClaySlider
				className="clay-color-slider clay-color-slider-hue"
				max={360}
				min={0}
				onChange={setInternalValue}
				onKeyUp={(event) => {
					const arrowKeys = [
						'ArrowDown',
						'ArrowLeft',
						'ArrowRight',
						'ArrowUp',
					];

					if (arrowKeys.indexOf(event.key) > -1) {
						handleOnChangeEnd(event);
					}
				}}
				onPointerUp={handleOnChangeEnd}
				showTooltip={false}
				step={1}
				style={{
					color: `hsl(${internalValue}, 100%, 50%)`,
				}}
				value={internalValue}
			/>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayInput
						data-testid="hInput"
						insetBefore
						max="360"
						min="0"
						onChange={(event) => {
							const value = event.target.value;

							let newVal = Number(value);

							if (newVal < 0) {
								newVal = 0;
							} else if (newVal > 360) {
								newVal = 360;
							}

							onChange(newVal);
						}}
						type="number"
						value={value}
					/>
					<ClayInput.GroupInsetItem before tag="label">
						H
					</ClayInput.GroupInsetItem>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</div>
	);
};

export default ClayColorPickerHue;
