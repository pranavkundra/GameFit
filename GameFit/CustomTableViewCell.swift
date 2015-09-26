//
//  CustomTableViewCell.swift
//  GameFit
//
//  Created by Pranav Kundra on 9/26/15.
//  Copyright © 2015 Pranav Kundra. All rights reserved.
//

import Foundation
import UIKit

class CustomTableViewCell: UITableViewCell {
    @IBOutlet var titleLabel: UILabel?
    @IBOutlet var subtitleLabel: UILabel?
    
    func loadItem(title title: String, subtitle: String) {
        titleLabel?.text = title
        subtitleLabel?.text = subtitle
        subtitleLabel?.sizeToFit()
        self.sizeToFit()
    }
}