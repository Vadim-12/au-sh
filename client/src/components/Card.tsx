import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {Car} from '@/types/car'

interface CarProps extends Car {}

const Card = ({mark, model, year_start, year_end, img_name, modifications}: CarProps) => {
	return (
		<div className="card">
			<div className="box_1">
				<div className="content">
					<h3>
						<Link href="/select">{mark} {model}</Link>
					</h3>
					<table>
						<tbody>
							<tr>
								<th>Двигатель</th>
								<th>Цена млн.р.</th>
								<th>V л.</th>
								<th>P л.с.</th>
								<th>WD</th>
							</tr>
							{
								modifications?.map(mod => (
									<tr>
										<td className="bg" height="50">{mod.engine}</td>
										<td className="bg">{mod.price_min}{mod.price_max && `-${mod.price_max}`}</td>
										<td>{mod.capacity}</td>
										<td>{mod.power}</td>
										<td>{mod.WD}</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>
			<div className="box_2">
				<div className="box_2_header">
					<h4>
						<Link href="/select" className="underlined">{year_start}{year_end && `-${year_end}`}</Link>
					</h4>
					<Image src="/assets/icons/logo_in_card.png" alt="logo_in_card" width={1000} height={1000} />
				</div>
				<Link href="/select" className="link_img">
					<Image src={`/assets/icons/${img_name}`} alt="car_in_card" width={1000} height={1000} className="car_in_card" />
				</Link>
			</div>
		</div>
	)
}

export default Card